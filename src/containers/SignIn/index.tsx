import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { useHistory, Link } from 'react-router-dom';
import { SIGNIN } from '../../api/Login/Login';
import { loginStateVar } from 'src/store/LoginStore';

// material-ui
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      BBT {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const loginState = {
  read() {
    //Any logic you want
    return loginStateVar();
  },
};

const SignIn: React.FC = (): any => {
  const classes = useStyles();
  const history = useHistory();

  const [accountInfo, setAccountInfo] = useState({
    id: '',
    pw: '',
  });

  console.log('HI', loginStateVar());

  const [auth, { loading, data, error }] = useLazyQuery(SIGNIN, {
    onCompleted: () => {
      loginStateVar(true);
      if (data) history.push('/home');
      console.log('login', data);
    },
    onError: () => {
      alert('계정이 맞지 않다!@!@');
    },
  });

  if (loading) return 'Loading...';

  const authCheck = (e: any) => {
    const { id, pw } = accountInfo;
    e.preventDefault();
    if (id.length === 0 || pw.length === 0) return alert('계정정보 다시');
    auth({ variables: { id, pw } });
  };

  const onChange = (e: any) => {
    const { name, value } = e.target;
    setAccountInfo({ ...accountInfo, [name]: value });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          BBT
        </Typography>
        <form className={classes.form} noValidate onSubmit={authCheck}>
          <TextField
            variant="filled"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="id"
            autoComplete="email"
            autoFocus
            onChange={onChange}
          />
          <TextField
            variant="filled"
            margin="normal"
            required
            fullWidth
            name="pw"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={onChange}
          />
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="#">Forgot password?</Link>
            </Grid>
            <Grid item>
              <Link to="/signup">Don't have an account? Sign Up</Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default SignIn;
