import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import makeServer from '../../server';
import { useState } from "react";


//variables
let page = -1;
let limit = 10;
let rows:any = [];

//make server
makeServer();
//create data function
function createData(
  firstName: string,
  lastName: string,
  dob: string,
  isAdmin: boolean,
) {
  return { firstName, lastName, dob, isAdmin,};
}

export default function BasicTable() {
  const [data, setData] = useState([])
  async function getapi(url:string) {
    // Storing response
    const response = await fetch(url); 
    // Storing data in form of JSON
    let data = await response.json();
    //pushing data in order
    data.users.forEach((user: { firstName: string; lastName: string; dateOfBirth: string; isAdmin: boolean; }) => {
      rows.push(createData(user.firstName, user.lastName, user.dateOfBirth, user.isAdmin));
    });
    setData(rows);
    debugger;
  }
  //function for getting table filled for the irst time
  const startFill =()=>{
    if(page === -1){
      page=0;
      getapi('api/users/'+page+'/'+limit)
    }
  }
  startFill();

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Date of Birth</TableCell>
            <TableCell>Admin status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row:any) => (
            <TableRow
              key={row.firstName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.firstName}
              </TableCell>
              <TableCell>{row.lastName}</TableCell>
              <TableCell>{row.dob}</TableCell>
              <TableCell>{(row.isAdmin === true)? 'Yes' : 'No'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <button onClick={() =>{
        //Previous page button
        if(page>0){
          page=page-1;
          rows = [];
            getapi('api/users/'+page+'/'+limit)
        }
      }}>Prev</button>
      <button onClick={() =>{
        //Next page button
        if(page<9){
          page=page+1;
          rows = [];
            getapi('api/users/'+page+'/'+limit)
        }
      }}>Next</button>
      <select name="limit" id="limit" onChange={(e)=>{
        limit = Number(e.target.value);
      }}>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="25">25</option>
      </select>
    </TableContainer>
  );
}
