import React from 'react';
import { Typography, Stack, Box } from '@mui/material';

export const AboutUs: React.FC = () => {
  return (
    <Stack spacing={3} alignItems="center" textAlign="center">
      <Typography variant="h3">About TEMPLLO</Typography>
      <Typography variant="body1" sx={{ maxWidth: 600 }}>
        TEMPLLO is a creative residency and community space where artists, creators, and spiritual seekers come together to build, share, and grow.
      </Typography>
      <Box sx={{ textAlign: 'left', maxWidth: 600 }}>
        <Typography variant="h5">Our Mission</Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          We provide a sanctuary for creative expression, spiritual practice, and sustainable living. Our space is designed to inspire and nurture the artistic spirit while fostering deep connections within our community.
        </Typography>
        <Typography variant="h5">The Experience</Typography>
        <Typography variant="body2">
          From our carefully crafted residencies to our community events, every aspect of TEMPLLO is designed to support your creative journey and personal growth.
        </Typography>
      </Box>
    </Stack>
  );
};
