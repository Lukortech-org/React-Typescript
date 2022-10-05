// import React from 'react';
// const Table = () => {
//     return <h1>Table</h1>;
// };
// export default Table;
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import makeServer from '../../server';

const page = 1;
const limit = 10;
const rows:any = [];
makeServer();
//const response = fetch('/api/users/1/10');
//console.log(response.user.firstName)
async function getapi(url:string) {
    // Storing response
    const response = await fetch(url); 
    // Storing data in form of JSON
    let data = await response.json();

    data.users.forEach((user: { firstName: string; lastName: string; dateOfBirth: string; isAdmin: boolean; }) => {
      rows.push(createData(user.firstName, user.lastName, user.dateOfBirth, user.isAdmin));
    });
    debugger;

}

function createData(
  firstName: string,
  lastName: string,
  dob: string,
  isAdmin: boolean,
) {
  return { firstName, lastName, dob, isAdmin,};
}
getapi('/api/users/'+page+'/'+limit);

// const rows = [
//   createData('Frozen yoghurt', "woah", "ashjbf", true ),
// ];

export default function BasicTable() {
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
          {rows.map((row:any) => (
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
