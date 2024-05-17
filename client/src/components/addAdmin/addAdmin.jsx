import React, { useState } from "react";
import './addAdmin.css'
import Sidebar from '../sidebar/sidebar'
import { Col, Row, Input, Button } from "antd";
import axios from "axios";



const addAdmin = () => {
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState(false);
  const [userName, setUserName] = useState("");
  const [userNameError, setUserNameError] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");
  const [mobileNumberError, setMobileNumberError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [adminType, setAdminType] = useState("");
  const [adminTypeError, setAdminTypeError] = useState(false);

  const handleSubmit = async(e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    setFirstNameError(
      firstName.trim() === "" ? "First name cannot be empty" : ""
    );
    setLastNameError(lastName.trim() === "" ? "Last name cannot be empty" : "");
    setUserNameError(userName.trim() === "" ? "Username cannot be empty" : "");
    setMobileNumberError(
      mobileNumber.trim() === "" ? "Mobile number cannot be empty" : ""
    );
    setAdminTypeError(adminType.trim() === "" ? "Admin Type cannot be empty" : "");
    setPasswordError(password.trim() === "" ? "Password cannot be empty" : "");
    setConfirmPasswordError(
      confirmPassword.trim() === "" ? "Confirm password cannot be empty" : ""
    );

    if (email.trim() === "") {
      setEmailError("Email cannot be empty");
    } else if (!emailRegex.test(email)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }



      // send data to the backend
  try {
    console.log(firstName, lastName, userName,adminType, mobileNumber, email, password,confirmPassword);
    const addUserResponse = await axios.post("http://localhost:8080/api/v1/admin/add_admin",{firstName:firstName,lastName:lastName,email:email,adminType:adminType,username:userName,mobileNumber:mobileNumber,password:password,confirmedPassword:confirmPassword});
    if(addUserResponse.data.success){
      alert("Admin added successfully");
      window.location.reload(); 
    }
  } catch (error) {
     alert(error.message);
  }




  };

  // Fist Name Error handling
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
    if (e.target.value.trim() === "") {
      setFirstNameError(true);
    } else {
      setFirstNameError(false);
    }
  };

  // Last Name Error handling
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
    if (e.target.value.trim() === "") {
      setLastNameError(true);
    } else {
      setLastNameError(false);
    }
  };

  // User Name Error handling
  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
    if (e.target.value.trim() === "") {
      setUserNameError(true);
    } else {
      setUserNameError(false);
    }
  };

  // Mobile Number Error handling
  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
    if (e.target.value.trim() === "") {
      setMobileNumberError(true);
    } else {
      setMobileNumberError(false);
    }
  };

  // Email Error handling
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (e.target.value.trim() === "") {
      setEmailError("Email cannot be empty");
    } else if (!emailRegex.test(e.target.value)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }
  };

  // Admin Type Error handling
  const handleAdminTypeChange = (e) => {
    setAdminType(e.target.value);
    if (e.target.value.trim() === "") {
      setAdminTypeError(true);
    } else {
      setAdminTypeError(false);
    }
  };

  // Password Error handling
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (e.target.value.trim() === "") {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  // Confirm Password Error handling
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (e.target.value.trim() === "") {
      setConfirmPasswordError(true);
    } else {
      setConfirmPasswordError(false);
    }
  };

  return (
    <Sidebar>
      <div className="Outer">
        <div className="AddUser" style={{ width: "40vw" }}>
          <Row gutter={50} style={{ marginBottom: "20px" }}>
            <Col span={12}>
              <div style={{ marginBottom: "10px" }}>
                First <span style={{ color: "red" }}>*</span>
              </div>
              <div>
                <Input
                  type="text"
                  id="firstName"
                  required
                  name="firstName"
                  onChange={handleFirstNameChange}
                  allowClear
                  placeholder="Enter First Name"
                />
                {firstNameError && (
                  <div
                    className="error"
                    style={{ fontSize: "13px", color: "red" }}
                  >
                    First name cannot be empty
                  </div>
                )}
              </div>
            </Col>
            <Col span={12}>
              <div style={{ marginBottom: "10px" }}>
                Last <span style={{ color: "red" }}>*</span>
              </div>
              <div>
                <Input
                  type="text"
                  id="lastName"
                  required
                  name="lastName"
                  onChange={handleLastNameChange}
                  allowClear
                  placeholder="Enter Last Name"
                />
                {lastNameError && (
                  <div
                    className="error"
                    style={{ fontSize: "13px", color: "red" }}
                  >
                    Last name cannot be empty
                  </div>
                )}
              </div>
            </Col>
          </Row>

          <Row gutter={50} style={{ marginBottom: "15px" }}>
            <Col span={12}>
              <div style={{ marginBottom: "10px" }}>
                User Name <span style={{ color: "red" }}>*</span>
              </div>
              <div>
                <Input
                  type="text"
                  id="userName"
                  required
                  name="userName"
                  onChange={handleUserNameChange}
                  allowClear
                  placeholder="Enter Username"
                />
                {userNameError && (
                  <div
                    className="error"
                    style={{ fontSize: "13px", color: "red" }}
                  >
                    User name cannot be empty
                  </div>
                )}
              </div>
            </Col>
            <Col span={12}>
              <div style={{ marginBottom: "10px" }}>
                Mobile Number <span style={{ color: "red" }}>*</span>
              </div>
              <div>
                <Input
                  type="text"
                  id="mobileNumber"
                  required
                  name="mobileNumber"
                  onChange={handleMobileNumberChange}
                  allowClear
                  placeholder="Enter Mobile Number"
                  maxLength={10}
                  style={{
                    MozAppearance: "textfield",
                    WebkitAppearance: "none",
                  }}
                  onKeyPress={(e) => {
                    if (!/[0-9]/.test(e.key)) {
                      e.preventDefault();
                    }
                  }}
                />
                {mobileNumberError && (
                  <div
                    className="error"
                    style={{ fontSize: "13px", color: "red" }}
                  >
                    Mobile number cannot be empty
                  </div>
                )}
              </div>
            </Col>
          </Row>
          <Row gutter={50} style={{ marginBottom: "15px" }}>
            <Col span={24}>
              <div style={{ marginBottom: "10px" }}>
                Email<span style={{ color: "red" }}> *</span>
              </div>
              <div>
                <Input
                  type="email"
                  id="email"
                  required
                  name="email"
                  onChange={handleEmailChange}
                  allowClear
                  placeholder="Enter Email"
                />
                {emailError && (
                  <div
                    className="error"
                    style={{ fontSize: "13px", color: "red" }}
                  >
                    {emailError}
                  </div>
                )}
              </div>
            </Col>
          </Row>
          <Row gutter={50} style={{ marginBottom: "15px" }}>
            <Col span={24}>
              <div style={{ marginBottom: "10px" }}>
                Admin Type<span style={{ color: "red" }}> *</span>
              </div>
              <div>
                <Input
                  type="text"
                  id="adminType"
                  required
                  name="adminType"
                  onChange={handleAdminTypeChange}
                  allowClear
                  placeholder="Enter Admin Type"
                />
                {adminTypeError && (
                  <div
                    className="error"
                    style={{ fontSize: "13px", color: "red" }}
                  >
                    Admin Type cannot be empty
                  </div>
                )}
              </div>
            </Col>
          </Row>
          <Row gutter={50} style={{ marginBottom: "15px" }}>
            <Col span={12}>
              <div style={{ marginBottom: "10px" }}>
                Password<span style={{ color: "red" }}> *</span>
              </div>
              <div>
                <Input
                  type="password"
                  id="password"
                  required
                  name="password"
                  onChange={handlePasswordChange}
                  allowClear
                  placeholder="Enter Password"
                />
                {passwordError && (
                  <div
                    className="error"
                    style={{ fontSize: "13px", color: "red" }}
                  >
                    Password cannot be empty
                  </div>
                )}
              </div>
            </Col>
            <Col span={12}>
              <div>
                {" "}
                <div style={{ marginBottom: "10px" }}>
                  Confirm Password<span style={{ color: "red" }}> *</span>
                </div>
              </div>
              <div>
                <Input
                  type="password"
                  id="confirmPassword"
                  required
                  name="confirmPassword"
                  onChange={handleConfirmPasswordChange}
                  allowClear
                  placeholder="Confirm Password"
                />
                {confirmPasswordError && (
                  <div
                    className="error"
                    style={{ fontSize: "13px", color: "red" }}
                  >
                    Confirm Password cannot be empty
                  </div>
                )}
              </div>
            </Col>
          </Row>
          <Row gutter={50} style={{ marginTop: "35px" }}>
            <Col span={24}>
              <Button
                type="primary"
                block
                style={{
                  background: "#001529",
                  height: "40px",
                  borderRadius: "10px",
                }}
                onClick={handleSubmit}
              >
                Add Admin
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    </Sidebar>
  );
}

export default addAdmin
