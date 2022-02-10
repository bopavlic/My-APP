import { createTheme } from '@mui/material';
import { customDarkPallete, customPallete } from './consts';

export const darkTheme = createTheme({
  palette: customDarkPallete,
});

export const theme = createTheme({
  palette: customPallete,
});
