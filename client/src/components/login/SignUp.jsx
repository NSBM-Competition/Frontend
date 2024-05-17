import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { Button } from 'antd';
import Checkbox from '@mui/material/Checkbox';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const navigate = useNavigate();

  const handleCheckboxChange = (event) => {
    setAgreeTerms(event.target.checked);
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    // Add your sign-up logic here
    console.log(firstName,lastName,username,mobileNumber,password,confirmedPassword,agreeTerms);
    try {
      const registerResponse = await axios.post("http://localhost:8080/api/v1/user/register",{firstName:firstName,lastName:lastName,email:email,username:username,mobileNumber:mobileNumber,password:password,confirmedPassword:confirmedPassword,agreeTerms:agreeTerms})
      console.log(registerResponse.data);

      if (registerResponse.data.success) {
        navigate("/login");
      }

    } catch (error) {
      alert("Error signing up. Please try again.")
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <div>
        <h1 style={{ marginBottom: '5px', fontSize: '43px', marginLeft: '150px' }}>Sign Up</h1>
        
        <h4 style={{ color: 'grey', fontSize: '20px', marginLeft: '90px' }}>Already have an account ?<span style={{ fontSize: '15px'}}>LogIn</span></h4>

        <br />
        <form>
          <TextField
            id="first-name"
            label="First Name"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
          <TextField
            sx={{ marginLeft: '80px' }}
            id="last-name"
            label="Last Name"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
          <br />
          <br />
          <TextField
            id="username"
            label="Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <TextField
            sx={{ marginLeft: '80px' }}
            id="mobile-number"
            label="Mobile Number"
            value={mobileNumber}
            onChange={(event) => setMobileNumber(event.target.value)}
          />
          <br />
          <br />
          <TextField
            id="email"
            label="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            sx={{ width: '500px' }}
          />
          <br />
          <br />
          <TextField
            id="password"
            label="Password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <TextField
            sx={{ marginLeft: '80px' }}
            id="confirmed-password"
            label="Confirmed Password"
            type="password"
            value={confirmedPassword}
            onChange={(event) => setConfirmedPassword(event.target.value)}
          />
          <br />
          <br />
          <p style={{ marginLeft: '80px' }}>Use 8 more than characters with mix a letter</p>
          
         
          <Checkbox checked={agreeTerms} onChange={handleCheckboxChange} />

          <br/>
          <Button
            type="primary"
            htmlType="submit"
            onClick={handleSubmit}
            style={{ backgroundColor: 'grey', borderColor: 'grey', height: '40px', borderRadius: '10px', width: '490px' }}
            disabled={!agreeTerms} // Disable button if terms not agreed
          >
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
