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
      flexDirection: 'column',
      alignItems: 'center',
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
    reduxPlayground__todos: {
      marginTop: '1rem',
      height: '280px',
      overflow: 'auto',
    },
    reduxPlayground__todo: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '1rem',
      padding: '2rem',
      height: '4rem',
      fontSize: '20px',
    },
    reduxPlayground__button: {
      height: '50px',
      margin: '0.54rem !important',
    },
    image: {
      height: '300px',
      width: '400px',
      objectFit: 'cover',
    },
  };
});
