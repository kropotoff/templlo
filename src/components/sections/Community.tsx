import React from 'react';
import { Typography, Stack } from '@mui/material';

export const Community: React.FC = () => {
  return (
    <Stack spacing={3} alignItems="flex-start">
      <Typography variant="h3">Community & Belonging</Typography>
      <Typography variant="body1" sx={{ maxWidth: 600 }}>
        Join a grand audience of artists and creators. Build, share, and belong. Free residencies available through referrals. Your art, your community.
      </Typography>
    </Stack>
  );
};
