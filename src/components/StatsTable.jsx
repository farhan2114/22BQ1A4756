import React, { useEffect, useState } from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

const StatsTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const stats = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.length <= 10 && key !== "logs") {
        stats.push(JSON.parse(localStorage.getItem(key)));
      }
    }
    setData(stats);
  }, []);

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Short URL</TableCell>
          <TableCell>Clicks</TableCell>
          <TableCell>Click Details</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((item, idx) => (
          <TableRow key={idx}>
            <TableCell>{item.shortCode}</TableCell>
            <TableCell>{item.clicks.length}</TableCell>
            <TableCell>
              {item.clicks.map((click, i) => (
                <div key={i}>
                  {click.timestamp} — {click.source} — {click.location}
                </div>
              ))}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default StatsTable;
