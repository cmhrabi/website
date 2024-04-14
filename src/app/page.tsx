import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Copyright from '@/components/Copyright';

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Hi! My name is Calum, welcome to my portfolio, this is a change
        </Typography>
        <Copyright />
      </Box>
    </Container>
  );
}
