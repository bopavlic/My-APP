import { makeStyles } from '@mui/styles';

export const useReduxPlaygroundStyles = makeStyles({
  reduxPlayground: {
    maxWidth: '1440px',
    margin: '0 auto',
    border: '2px solid red',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1rem',
  },
  reduxPlayground__left: {
    backgroundColor: 'blue',
  },
  reduxPlayground__right: {
    backgroundColor: 'green',
  },
});
