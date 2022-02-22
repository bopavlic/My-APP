import { makeStyles } from '@material-ui/core/styles';

export const useReduxPlaygroundStyles = makeStyles((theme) => {
  return {
    reduxPlayground: {
      maxWidth: '1440px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1rem',
      [theme.breakpoints.down('sm')]: {
        gridTemplateColumns: '1fr',
      },
    },
    reduxPlayground__left: {
      display: 'flex',
      justifyContent: 'center',
      gap: '1rem',
      margin: '1rem',
    },
    reduxPlayground__right: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      gap: '1rem',
    },
    image: {
      height: '300px',
      width: '400px',
      objectFit: 'cover',
    },
  };
});
