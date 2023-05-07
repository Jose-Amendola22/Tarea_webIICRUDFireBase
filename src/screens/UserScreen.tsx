import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { User, users } from "../resources/Users.ts";
import { Alert, Button, Container, Grid, TextField, Typography } from "@mui/material";
import useForm from '../hooks/useForm.ts';
import { addUser, editUser } from "../resources/UsersFirebase.ts";

const emptyUser : User = {
  id: 0,
  name: '',
  role: '',
  salary: 0,
  address: '',
};

function UserScreen() {

    const { id } = useParams();
    const user = users.find(user => user.id.toString() === id);
    const [formUser, handleChange] = useForm(user || emptyUser);

    const [ error, setError ] = useState('');
    const [ success, setSuccess ] = useState('');

    const { name, role, salary, address } = formUser; 

    const save = async () => {
        const result = await addUser(formUser);
        result ? setSuccess("User added") : setError("User not added");
    }

    const edit = async () => {
        const result = await editUser(formUser, id);
        result ? setSuccess("User edited") : setError("User not edited");
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
                Add/Edit user 
              </Typography>
            </Grid>
          </Grid>
          <Grid container marginTop={3}>
            <Grid item md={4} sm={3} xs={0}></Grid>
              <Grid item md={4} sm={6} xs={12}>
              <TextField type="text" name="name" value={name} onChange={handleChange} fullWidth={true} label="Name" variant="outlined" />
              <br/><br/>
              <TextField type="text" name="role" value={role} onChange={handleChange} fullWidth={true} label="Role" variant="outlined" />
              <br/><br/>
              <TextField type="text" name="salary" value={salary} onChange={handleChange} fullWidth={true} label="Salary" variant="outlined" />
              <br/><br/>
              <TextField type="text" name="address" value={address} onChange={handleChange} fullWidth={true} label="Address" variant="outlined" />
              <br/><br/>
              <Button variant="outlined" onClick={id === "0" ? save : edit} >
                {id === "0" ? "save" : "edit"}
              </Button>
              </Grid>
            </Grid>
        </Grid>
      </Container>
    );
  }
  export default UserScreen;