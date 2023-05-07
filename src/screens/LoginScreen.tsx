import React, { useState } from "react";
// import Button from '@mui/material/Button';
import { Container, Alert, TextField, Typography, Grid } from "@mui/material";
import Button from '@mui/material/Button';

// import {auth} from '../firebase.ts';
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { auth } from "../firebase.ts";

function LoginScreen() {

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ error, setError ] = useState('');
  const [ success, setSuccess ] = useState('');

  const register = e => {
    e.preventDefault()
    setError('')
    // Create a new user with email and password using firebase
    createUserWithEmailAndPassword(auth, email, password)
    .then((res) => {
      setSuccess('User created');
      setError('');
    })
    .catch((error) => {
      setError(error.message);
      setSuccess('');
    });
  }

    return (
      <Container>
        <Grid container spacing={2} marginTop={3}>
          <Grid container>
            <Grid item md={4} sm={3} xs={0}></Grid>
            <Grid item md={4} sm={6} xs={12}>
            { success && <Alert severity="success">{success}</Alert>}
            { error && <Alert severity="error">{error}</Alert>}
              <Typography variant="h4">
                Login form
              </Typography>
            </Grid>
          </Grid>
          <Grid container marginTop={3}>
            <Grid item md={4} sm={3} xs={0}></Grid>
              <Grid item md={4} sm={6} xs={12}>
              <TextField id="outlined-basic" type="text" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth={true} label="Username" variant="outlined" />
              <br/><br/>
              <TextField id="outlined-basic" type="password" value={password} onChange={(e) => setPassword(e.target.value)} fullWidth={true} label="Password" variant="outlined" />
              <br/><br/>
              <Button variant="outlined">Login</Button>
              <Button variant="outlined" onClick={register} >Register</Button>
              </Grid>
            </Grid>
        </Grid>
      </Container>
    );
  }
  export default LoginScreen;