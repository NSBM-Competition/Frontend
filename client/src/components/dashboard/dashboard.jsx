import React from "react";
import Sidebar from "../sidebar/sidebar";
import "./dashboard.css";
import { Card, Statistic, Table } from "antd";
import CountUp from "react-countup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrashCan,faEdit } from "@fortawesome/free-regular-svg-icons";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

library.add(faTrashCan);

const formatter = (value) => (
  <span style={{ fontSize: "48px",fontWeight: "bold" }}>
    <CountUp end={value} separator="," />
    <span style={{ marginLeft: "5px" }}>$</span>
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
            backgroundColor: "#f0f2f5",
          }}
          headStyle={{
            fontSize: "24px",
            fontWeight: "bold",
            color: "#597ef7",
          }}
        >
          <div className="AdminSection1">
            <div className="AdminSection1Card">
              <Card
                bordered={false}
                style={{
                  width: "35vw",
                  height: "40vh",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                <Line
                  className="chart"
                  data={{
                    labels: [
                    "January", 
                    "February", 
                    "March", 
                    "April",
                    "May", 
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December"
                  ],

                    datasets: [
                      {
                        label: "Active Users",
                        data: [10, 20, 15, 35, 25, 30, 40, 23, 50, 45, 60, 65],
                        borderColor: "red",
                        fill: false,
                      },
                    ],
                  }}
                />
              </Card>
            </div>
            <div className="AdminSection1Card">
              <Card
                bordered={false}
                style={{
                  width: "35vw",
                  height: "40vh",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                <Statistic
                  title={
                    <span style={{ fontSize: "32px" }}>Total Payments</span>
                  }
                  value={112893}
                  formatter={formatter}
                  style={{
                    textAlign: "center",
                    marginTop: "10%",
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
          headStyle={{
            fontSize: "24px",
            fontWeight: "bold",
            color: "#597ef7",
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
                    <FontAwesomeIcon icon={faEdit} className="IconButton" />
                    <FontAwesomeIcon
                      icon="fa-regular fa-trash-can"
                      className="IconButton"
                    />
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
          headStyle={{
            fontSize: "24px",
            fontWeight: "bold",
            color: "#597ef7",
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
                    <FontAwesomeIcon
                      icon="fa-regular fa-trash-can"
                      className="IconButton"
                    />
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
          headStyle={{
            fontSize: "24px",
            fontWeight: "bold",
            color: "#597ef7",
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
                    <FontAwesomeIcon icon={faEdit} className="IconButton" />
                    <FontAwesomeIcon
                      icon="fa-regular fa-trash-can"
                      className="IconButton"
                    />
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
