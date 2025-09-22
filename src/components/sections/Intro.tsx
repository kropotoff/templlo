import React from 'react';
import { Typography, Stack } from '@mui/material';

export const Intro: React.FC = () => {
  return (
    <Stack spacing={3} alignItems="flex-start">
      <Typography variant="h2">TEMPLLO</Typography>
      <Typography variant="h5" sx={{ maxWidth: 600 }}>
        Where time becomes an abstract matter.
      </Typography>
    </Stack>
  );
};
