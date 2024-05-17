import React, { useState } from 'react';
import {  TextField } from '@mui/material';

const SignUp = () => {
  const [name, setName] = useState('');

  return (
    <div>
      
        <TextField
          id="outlined-controlled"
          label="Controlled"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <TextField
          id="outlined-uncontrolled"
          label="Uncontrolled"
          defaultValue="foo"
        />
      
    </div>
  );
};

export default SignUp;
