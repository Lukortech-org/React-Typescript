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
const rows:any = [];

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

//get api function with a lot of





export default function BasicTable() {
  const [data, setData] = useState([])
  async function getapi(url:string) {
    // Storing response
    const response = await fetch(url); 
    // Storing data in form of JSON
    let data = await response.json();
  
    data.users.forEach((user: { firstName: string; lastName: string; dateOfBirth: string; isAdmin: boolean; }) => {
      rows.push(createData(user.firstName, user.lastName, user.dateOfBirth, user.isAdmin));
    });
    setData(rows);
    debugger;
  }
  getapi('api/users/'+page+'/'+limit)


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
              <TableCell>{row.isAdmin}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
