import Typography from '@mui/material/Typography';
import React from 'react';
import { PrimaryTitleProps } from './types';

const PrimaryTitle: React.FC<PrimaryTitleProps> = (props) => {
  const { children } = props;
  return (
    <Typography
      sx={{
        textAlign: 'center',
        padding: '1rem',
        width: '25rem',
        margin: ' auto',
        fontWeight: 'bold',
      }}
      variant='h3'
    >
      {children}
    </Typography>
  );
};

export default PrimaryTitle;
