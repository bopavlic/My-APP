import Typography from '@mui/material/Typography';
import React from 'react';
import { PrimaryTitleProps } from './types';

const PrimaryTitle: React.FC<PrimaryTitleProps> = (props) => {
  const { children } = props;
  return (
    <Typography
      sx={{
        padding: '1rem 0',
        width: '25rem',
        fontWeight: 'bold',
        margin: '0 auto',
        textAlign: 'center',
      }}
      variant='h3'
    >
      {children}
    </Typography>
  );
};

export default PrimaryTitle;
