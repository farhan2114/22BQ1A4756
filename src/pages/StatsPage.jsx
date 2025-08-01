import React from 'react';
import StatsTable from '../components/StatsTable';
import { Typography, Box } from '@mui/material';

const StatsPage = () => {
  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>URL Statistics</Typography>
      <StatsTable />
    </Box>
  );
};

export default StatsPage;
