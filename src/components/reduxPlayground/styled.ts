import { makeStyles } from '@mui/styles';

export const useReduxPlaygroundStyles = makeStyles({
  reduxPlayground: {
    maxWidth: '1440px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1rem',
  },
  reduxPlayground__left: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    margin: '1rem',
  },
  reduxPlayground__right: {
    backgroundColor: 'green',
  },
});
