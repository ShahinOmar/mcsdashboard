import React from 'react';
import {Link } from 'react-router-dom';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';

const DevicesList = ({ data }) => {
  if (!Array.isArray(data) || data.length === 0) {
    return <div>No data available.</div>;
  }

  const headers = Object.keys(data[0]).filter((key)=> key !== '_id');

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {headers.map((header) => (
              <TableCell key={header}>{header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index} component={Link} to = {`/${item.name}`} style={{ textDecoration: 'none' }}>
              {headers.map((header) => (
                <TableCell key={header} >{item[header]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DevicesList;
