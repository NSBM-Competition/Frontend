import React from 'react';
import { Button, Form, Input } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const MyFormItemGroup = ({ prefix, children }) => (
  <Form.Item name={prefix}>
    {children}
  </Form.Item>
);

const MyFormItem = ({ name, label, children }) => (
  <Form.Item name={name} label={label}>
    {children}
  </Form.Item>
);





const Login = () => {

const navigate = useNavigate();

  const onFinish = async(values) => {
    console.log('Form values:', values);
    const UserName = values.UserName
    const Password = values.Password
    const DTPCode = values.DTPCode
  
    try {
      const loginResponse = await axios.post("http://localhost:8080/api/v1/user/login",{UserName:UserName ,Password:Password,DTPCode:DTPCode })
      console.log(loginResponse);
      
      // Redirect to home page or perform other actions
  
      if (loginResponse.data.success) {
        alert(loginResponse.data.message)
        navigate("/Home")
      }
      else{
        alert(loginResponse.data.message)
      }
  
    } catch (error) {
     alert(error.message);
    }
  };



  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Form name="form_item_path" layout="vertical" onFinish={onFinish} style={{ textAlign: 'center' }}>
        <h1 style={{ marginBottom: '20px', color: 'grey' ,fontSize:'43px',}}>Sign In</h1>
        <MyFormItemGroup prefix={['user']}>
          <MyFormItemGroup prefix={['name']}>
            <MyFormItem name="UserName" label="User Name">
              <Input style={{ width: '400px',borderRadius: '8px',borderColor: 'grey' }} />
            </MyFormItem>
            <MyFormItem name="DTPCode" label="DTPCode">
              <Input style={{ width: '400px',borderRadius: '8px',borderColor: 'grey' }} />
            </MyFormItem>
          </MyFormItemGroup>

          <MyFormItem name="Password" label="Password">
            <Input style={{ width: '400px',borderRadius: '8px',borderColor: 'grey' }} />
          </MyFormItem>
        </MyFormItemGroup>

        <Button
          type="primary"
          htmlType="submit"
          style={{ backgroundColor: 'grey', borderColor: 'grey', height: '40px', borderRadius: '10px',width: '400px'  }}
        >
          Sign Up
        </Button>
        <br/>
        <p>Already Have An account? LogIn</p>
      </Form>
    </div>
  );
};

export default Login;
