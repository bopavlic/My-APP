import Typography from '@mui/material/Typography';
import React from 'react';
import { PrimaryTitleProps } from './types';

const PrimaryTitle: React.FC<PrimaryTitleProps> = (props) => {
  const { children } = props;
  return (
    <Typography sx={{ textAlign: 'center', padding: '1rem' }} variant='h4'>
      {children}
    </Typography>
  );
};

export default PrimaryTitle;
