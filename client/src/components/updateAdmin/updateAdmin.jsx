import React from 'react'
import './updateAdmin.css'
import Sidebar from '../sidebar/sidebar'
import { Col, Row, Input, Button } from "antd";

const updateAdmin = () => {
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
                <Input placeholder="Basic usage" />
              </div>
            </Col>
            <Col span={12}>
              <div style={{ marginBottom: "10px" }}>
                Last <span style={{ color: "red" }}>*</span>
              </div>
              <div>
                <Input placeholder="Basic usage" />
              </div>
            </Col>
          </Row>

          <Row gutter={50} style={{ marginBottom: "15px" }}>
            <Col span={12}>
              <div style={{ marginBottom: "10px" }}>
                User Name <span style={{ color: "red" }}>*</span>
              </div>
              <div>
                <Input placeholder="Basic usage" />
              </div>
            </Col>
            <Col span={12}>
              <div style={{ marginBottom: "10px" }}>
                Mobile Number <span style={{ color: "red" }}>*</span>
              </div>
              <div>
                <Input placeholder="Basic usage" />
              </div>
            </Col>
          </Row>
          <Row gutter={50} style={{ marginBottom: "15px" }}>
            <Col span={24}>
              <div style={{ marginBottom: "10px" }}>
                Email<span style={{ color: "red" }}> *</span>
              </div>
              <div>
                <Input placeholder="Basic usage" />
              </div>
            </Col>
          </Row>
          <Row gutter={50} style={{ marginBottom: "15px" }}>
            <Col span={24}>
              <div style={{ marginBottom: "10px" }}>
                Admin Type<span style={{ color: "red" }}> *</span>
              </div>
              <div>
                <Input placeholder="Basic usage" />
              </div>
            </Col>
          </Row>
          <Row gutter={50} style={{ marginBottom: "15px" }}>
            <Col span={12}>
              <div style={{ marginBottom: "10px" }}>
                Password<span style={{ color: "red" }}> *</span>
              </div>
              <div>
                <Input placeholder="Basic usage" />
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
                <Input placeholder="Basic usage" />
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
              >
                Update Admin
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    </Sidebar>
  );
}

export default updateAdmin
