import React from 'react';
import URLForm from '../components/URLForm';
import URLList from '../components/URLList';
import { Box, Typography } from '@mui/material';

const ShortenerPage = () => {
  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>URL Shortener</Typography>
      <URLForm />
      <URLList />
    </Box>
  );
};

export default ShortenerPage;
