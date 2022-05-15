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
          width: '100%',
          borderRadius: 0,
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
