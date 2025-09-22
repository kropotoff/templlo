import React from 'react';
import { Typography, Stack, Button } from '@mui/material';

const REFERRAL_URL = 'https://surfgasm.world/';

export const BookRefer: React.FC = () => {
  return (
    <Stack spacing={3} alignItems="flex-start">
      <Typography variant="h3">Book & Refer</Typography>
      <Typography variant="body1" sx={{ maxWidth: 600 }}>
        Book your stay or refer friends to Surfgasm guest houses for referral bonuses and free residencies. Off-season bookings (Nov–Mar) help sustain our creative community.
      </Typography>
      <Button 
        variant="contained" 
        href={REFERRAL_URL} 
        target="_blank" 
        rel="noopener"
        sx={{
          bgcolor: '#270a02',
          color: '#E3D6CD',
          px: 4,
          py: 2,
          borderRadius: 3,
          fontSize: '1.1rem',
          fontWeight: 600,
          textTransform: 'none',
          letterSpacing: 1,
          boxShadow: '0 4px 12px rgba(39, 10, 2, 0.2)',
          '&:hover': {
            bgcolor: '#1a0701',
            boxShadow: '0 6px 20px rgba(39, 10, 2, 0.3)',
            transform: 'translateY(-2px)',
          },
          transition: 'all 0.3s ease',
        }}
      >
        Book Surfgasm Guest Houses
      </Button>
    </Stack>
  );
};
