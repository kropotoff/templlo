import React from 'react';
import { Typography, Stack, Box } from '@mui/material';

export const CoreValues: React.FC = () => {
  return (
    <Stack spacing={3} alignItems="center" textAlign="center">
      <Typography variant="h3">Our Core Values</Typography>
      <Typography variant="body1" sx={{ maxWidth: 600 }}>
        TEMPLLO stands on three pillars: <b>Art</b>, <b>Spirituality</b>, and <b>Sustainability</b>.
      </Typography>
      <Box sx={{ textAlign: 'left', maxWidth: 600 }}>
        <Typography variant="h5">Art</Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          A collective space for artists to thrive, create, and connect. Apply online for S (1 week), M (2 weeks), or L (1 month) residencies.
        </Typography>
        <Typography variant="h5">Spirituality</Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Silence, attention, and daily practice. A place for reflection and growth.
        </Typography>
        <Typography variant="h5">Sustainability</Typography>
        <Typography variant="body2">
          Local materials, low impact, and a commitment to the environment.
        </Typography>
      </Box>
    </Stack>
  );
};
