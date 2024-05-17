import React, { useEffect, useState } from "react";
import './viewUsers.css'
import Sidebar from '../sidebar/sidebar'
import { Col, Row, Input, Button } from "antd";

import axios from 'axios'


const viewUsers = () => {
  
  const [registeredData , setRegisteredData] = useState([])

  useEffect(()=>{
    registeredUserDetails()
  },[])
  
  const registeredUserDetails = async()=>{
    try {
      const userResponse = await axios.get("http://localhost:8080/api/v1/user/details")
      console.log(userResponse.data);

      if(userResponse.data.success){
        setRegisteredData(userResponse.data.registerUserDetails)
      }
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <Sidebar>
      <div className="Outer">
        <div className="Inner">
          <h1>Registered Users</h1>
          
          <Row>
            <Col span={24}>
              <table>
                
                {registeredData.map((user)=>{
                  return(
                    <tr>
                      <td>{user.username}</td>
                    </tr>
                  )
                })}
              </table>
            </Col>
          </Row>
          </div>
      </div>
    </Sidebar>
  );
}

export default viewUsers
