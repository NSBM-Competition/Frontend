import React from "react";
import Sidebar from "../sidebar/sidebar";
import "./dashboard.css";
import { Card, Statistic, Table } from "antd";
import CountUp from "react-countup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrashCan,faEdit } from "@fortawesome/free-regular-svg-icons";

library.add(faTrashCan);

const formatter = (value) => (
  <span style={{ fontSize: "36px" }}>
    <CountUp end={value} separator="," />
  </span>
);

const dashboard = () => {
  const dataSource = [
    {
      key: "1",
      dtpCode: "DTP001",
      userName: "user1",
      firstName: "John",
      lastName: "Doe",
      coachName: "Coach1",
      mobile: "1234567890",
      email: "john.doe@example.com",
      status: "Active",
      action: "Edit",
    },
    {
      key: "2",
      dtpCode: "DTP002",
      userName: "user2",
      firstName: "Jane",
      lastName: "Doe",
      coachName: "Coach2",
      mobile: "0987654321",
      email: "jane.doe@example.com",
      status: "Inactive",
      action: "Edit",
    },
    {
      key: "3",
      dtpCode: "DTP002",
      userName: "user2",
      firstName: "Jane",
      lastName: "Doe",
      coachName: "Coach2",
      mobile: "0987654321",
      email: "jane.doe@example.com",
      status: "Inactive",
      action: "Edit",
    },
    {
      key: "4",
      dtpCode: "DTP002",
      userName: "user2",
      firstName: "Jane",
      lastName: "Doe",
      coachName: "Coach2",
      mobile: "0987654321",
      email: "jane.doe@example.com",
      status: "Inactive",
      action: "Edit",
    },
    {
      key: "5",
      dtpCode: "DTP002",
      userName: "user2",
      firstName: "Jane",
      lastName: "Doe",
      coachName: "Coach2",
      mobile: "0987654321",
      email: "jane.doe@example.com",
      status: "Inactive",
      action: "Edit",
    },
    {
      key: "6",
      dtpCode: "DTP002",
      userName: "user2",
      firstName: "Jane",
      lastName: "Doe",
      coachName: "Coach2",
      mobile: "0987654321",
      email: "jane.doe@example.com",
      status: "Inactive",
      action: "Edit",
    },
  ];

  return (
    <Sidebar>
      <div className="AdminDashBoardSetup">
        {/*System Information*/}
        <Card
          title="System Information"
          bordered={false}
          style={{
            width: "80vw",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div className="AdminSection1">
            <div className="AdminSection1Card">
              <Card
                bordered={false}
                style={{
                  width: "30vw",
                  height: "25vh",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                <p>Card content</p>
              </Card>
            </div>
            <div className="AdminSection1Card">
              <Card
                bordered={false}
                style={{
                  width: "30vw",
                  height: "25vh",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                <Statistic
                  title="Total Payments"
                  value={112893}
                  formatter={formatter}
                  style={{
                    textAlign: "center",
                    marginTop: "auto",
                    marginBottom: "auto",
                  }}
                />
              </Card>
            </div>
          </div>
        </Card>

        {/*User Information*/}
        <Card
          title="User Information"
          bordered={false}
          style={{
            width: "80vw",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Table
            dataSource={dataSource}
            className="Table"
            columns={[
              {
                title: "DTP Code",
                dataIndex: "dtpCode",
                key: "dtpCode",
                render: (text) => <span>{text}</span>,
              },
              {
                title: "User Name",
                dataIndex: "userName",
                key: "userName",
                render: (text) => <span>{text}</span>,
              },
              {
                title: "First Name",
                dataIndex: "firstName",
                key: "firstName",
                render: (text) => <span>{text}</span>,
              },
              {
                title: "Last Name",
                dataIndex: "lastName",
                key: "lastName",
                render: (text) => <span>{text}</span>,
              },
              {
                title: "Coach Name",
                dataIndex: "coachName",
                key: "coachName",
                render: (text) => <span>{text}</span>,
              },
              {
                title: "Mobile",
                dataIndex: "mobile",
                key: "mobile",
                render: (text) => <span>{text}</span>,
              },
              {
                title: "Email",
                dataIndex: "email",
                key: "email",
                render: (text) => <span>{text}</span>,
              },
              {
                title: "Status",
                dataIndex: "status",
                key: "status",
                render: (text) => <span>{text}</span>,
              },
              {
                title: "Action",
                dataIndex: "action",
                key: "status",
                render: (text, record) => (
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "10px",
                    }}
                  >
                    <FontAwesomeIcon icon={faEdit} />
                    <FontAwesomeIcon icon="fa-regular fa-trash-can" />
                  </span>
                ),
              },
            ]}
            pagination={{
              style: {
                marginTop: "10px",
              },
              pageSize: 5,
            }}
            // Displaying data from the frontend
          ></Table>
        </Card>

        {/*Payment Information*/}
        <Card
          title="Payment Information"
          bordered={false}
          style={{
            width: "80vw",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Table
            dataSource={dataSource}
            className="Table"
            columns={[
              {
                title: "DTP Code",
                dataIndex: "dtpCode",
                key: "dtpCode",
                render: (text) => <span>{text}</span>,
              },
              {
                title: "User Name",
                dataIndex: "userName",
                key: "userName",
                render: (text) => <span>{text}</span>,
              },
              {
                title: "First Name",
                dataIndex: "firstName",
                key: "firstName",
                render: (text) => <span>{text}</span>,
              },
              {
                title: "Payment Value",
                dataIndex: "paymentValue",
                key: "paymentValue",
                render: (text) => <span>{text}</span>,
              },
              {
                title: "Payment Type",
                dataIndex: "paymentType",
                key: "paymentType",
                render: (text) => <span>{text}</span>,
              },
              {
                title: "Action",
                dataIndex: "action",
                key: "status",
                render: (text, record) => (
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "10px",
                    }}
                  >
                    <FontAwesomeIcon icon="fa-regular fa-trash-can" />
                  </span>
                ),
              },
            ]}
            pagination={{
              style: {
                marginTop: "10px",
              },
              pageSize: 5,
            }}
          ></Table>
        </Card>

        {/*Admins Information*/}
        <div>Admins</div>

        {/*Admins Information*/}
        <Card
          title="Admin Information"
          bordered={false}
          style={{
            width: "80vw",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Table
            dataSource={dataSource}
            className="Table"
            columns={[
              {
                title: "Admin Id",
                dataIndex: "adminId",
                key: "adminId",
                render: (text) => <span>{text}</span>,
              },
              {
                title: "User Name",
                dataIndex: "userName",
                key: "userName",
                render: (text) => <span>{text}</span>,
              },
              {
                title: "First Name",
                dataIndex: "firstName",
                key: "firstName",
                render: (text) => <span>{text}</span>,
              },
              {
                title: "Last Name",
                dataIndex: "lastName",
                key: "lastName",
                render: (text) => <span>{text}</span>,
              },
              {
                title: "Mobile",
                dataIndex: "mobile",
                key: "mobile",
                render: (text) => <span>{text}</span>,
              },
              {
                title: "Email",
                dataIndex: "email",
                key: "email",
                render: (text) => <span>{text}</span>,
              },
              {
                title: "Status",
                dataIndex: "status",
                key: "status",
                render: (text) => <span>{text}</span>,
              },
              {
                title: "Action",
                dataIndex: "action",
                key: "status",
                render: (text, record) => (
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "10px",
                    }}
                  >
                    <FontAwesomeIcon icon={faEdit} />
                    <FontAwesomeIcon icon="fa-regular fa-trash-can" />
                  </span>
                ),
              },
            ]}
            pagination={{
              style: {
                marginTop: "10px",
              },
              pageSize: 5,
            }}
          ></Table>
        </Card>
      </div>
    </Sidebar>
  );
};

export default dashboard;
