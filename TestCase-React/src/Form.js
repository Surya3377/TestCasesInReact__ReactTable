import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const Form = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    password: ''
  });

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formValues.name) {
      errors.name = 'Name is required';
      isValid = false;
    }

    if (!formValues.email) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = 'Invalid email address';
      isValid = false;
    }

    if (!formValues.password) {
      errors.password = 'Password is required';
      isValid = false;
    } else if (formValues.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Form is valid, perform submit logic here
      alert(JSON.stringify(formValues, null, 2));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column",alignItems:"center"}}>
      <TextField
        id="name"
        name="name"
        label="Name"
        value={formValues.name}
        onChange={handleInputChange}
        error={Boolean(formErrors.name)}
        helperText={formErrors.name}
        margin="normal"
        variant="outlined"
      /><br/>
      <TextField
        id="email"
        name="email"
        label="Email"
        value={formValues.email}
        onChange={handleInputChange}
        error={Boolean(formErrors.email)}
        helperText={formErrors.email}
        margin="normal"
        variant="outlined"
      /><br/>
      <TextField
        id="password"
        name="password"
        label="Password"
        type="password"
        value={formValues.password}
        onChange={handleInputChange}
        error={Boolean(formErrors.password)}
        helperText={formErrors.password}
        margin="normal"
        variant="outlined"
      /><br/>
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default Form;
