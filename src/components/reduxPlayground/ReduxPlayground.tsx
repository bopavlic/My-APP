import React from 'react';
import { Box } from '@mui/material';
import { useReduxPlaygroundStyles } from './styled';

const ReduxPlayground = () => {
  const classes = useReduxPlaygroundStyles();
  return (
    <Box className={classes.reduxPlayground}>
      <Box className={classes.reduxPlayground__left}>left</Box>
      <Box className={classes.reduxPlayground__right}>right</Box>
    </Box>
  );
};

export default ReduxPlayground;
