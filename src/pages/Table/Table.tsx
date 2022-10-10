import Ract, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import UserI from '../../types/User';

interface ParamsI {
  page: number;
  limit: number;
}

interface DataI {
  users: UserI[];
  totalEntries: number;
}

export default function BasicTable() {
  const initialDataState: DataI = {
    users: [],
    totalEntries: 0,
  };
  const [data, setData] = useState<DataI>(initialDataState);
  const [params, setParams] = useState<ParamsI>({
    page: 0,
    limit: 10,
  });

  useEffect(() => {
    async function getUsers(url: string, params?: ParamsI) {
      const response = await fetch(url + params?.page + '/' + params?.limit);
      const { users, totalEntries } = await response.json();

      setData({ users: users.models, totalEntries: totalEntries });
    }

    getUsers('api/users/', params);
  }, [params]);

  const handlePreviousPage = () => {
    if (params.page > 0) {
      setParams((prevState) => ({ ...prevState, page: prevState.page - 1 }));
    }
  };

  const handleNextPage = () => {
    if (params.page < Math.ceil((data.totalEntries / params.limit)-1)) {
      setParams((prevState) => ({ ...prevState, page: prevState.page + 1 }));
    }
  };

  const handleLimitChange = (e: { target: { value: string } }) => {
    setParams((prevState) => ({ ...prevState, limit: Number(e.target.value), page: 0 }));
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Date of Birth</TableCell>
            <TableCell>Admin status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.users.map((row: any) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component='th' scope='row'>
                {row.firstName}
              </TableCell>
              <TableCell>{row.lastName}</TableCell>
              <TableCell>{row.dob}</TableCell>
              <TableCell>{row.isAdmin === true ? 'Yes' : 'No'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <button onClick={handlePreviousPage}>Prev</button>
      <button onClick={handleNextPage}>Next</button>
      <select
        name='limit'
        id='limit'
        itemType='number'
        onChange={handleLimitChange}
      >
        <option value='10'>10</option>
        <option value='20'>20</option>
        <option value='25'>25</option>
      </select>
    </TableContainer>
  );
}
