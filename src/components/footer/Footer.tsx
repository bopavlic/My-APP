import { Paper, Typography } from '@mui/material';

const Footer = () => {
  return (
    <footer>
      <Paper
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '7vh',
          marginTop: '2rem',
        }}
      >
        <Typography sx={{ letterSpacing: '0.2rem' }}>
          Code & Design by Borna Pavlić
        </Typography>
      </Paper>
    </footer>
  );
};

export default Footer;
