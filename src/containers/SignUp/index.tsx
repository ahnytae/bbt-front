import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { SIGNUP } from '../../api/Login/Login';
import { useHistory, Link } from 'react-router-dom';
import { validateEmail, validatePw } from '../../components/validate/validate';

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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignUp: React.FC = (): any => {
  const classes = useStyles();
  const history = useHistory();
  const [accountInfo, setAccountInfo] = useState({
    id: '',
    pw: '',
    rePw: '',
    name: '',
  });
  const [overlapPw, setOverlapPw] = useState<boolean>(true);

  const [signup, { loading, data }] = useMutation(SIGNUP);

  if (loading) return 'Loading...';

  const onChange = (e: any) => {
    const { name, value } = e.target;
    setAccountInfo({ ...accountInfo, [name]: value });
  };

  const authCheck = (e: any) => {
    const { id, pw, name } = accountInfo;
    e.preventDefault();

    signup({ variables: { id, pw, name } });
  };

  // 비번 동일한지 체크
  const overlapCheck = (e: any) => {
    if (e.target.value === accountInfo.pw && validatePw(e.target.value)) setOverlapPw(false);
    else setOverlapPw(true);
  };

  // if (error) alert('no');
  if (data) history.push('/signin');

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate onSubmit={authCheck}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField variant="filled" required fullWidth id="name" label="Name" name="name" autoComplete="name" onChange={onChange} />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={!validateEmail(accountInfo.id)}
                variant="filled"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="id"
                autoComplete="email"
                onChange={onChange}
                helperText="Incorrect entry."
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={!validatePw(accountInfo.pw)}
                variant="filled"
                required
                fullWidth
                name="pw"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={onChange}
                helperText="숫자, 특문 각 1회 이상, 영문은 2개 이상 사용하여 8자리 이상"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={overlapPw}
                variant="filled"
                required
                fullWidth
                name="pw"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={overlapCheck}
                helperText={`${!overlapPw ? '' : '비밀번호 동일하게'}`}
              />
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/signin">Already have an account? Sign in</Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default SignUp;
