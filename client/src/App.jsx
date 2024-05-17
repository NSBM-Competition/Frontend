import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashbaord from "./components/dashboard/dashboard";
import AddUsers from "./components/addUsers/addUsers";
import UpdateUsers from "./components/updateUsers/updateUsers";
import AddAdmin from "./components/addAdmin/addAdmin";
import UpdateAdmin from "./components/updateAdmin/updateAdmin";
import Login from "./components/login/login"
import ViewUsers from "./components/vewUsers/viewUsers"
import SignUp from "./components/login/SignUp"
import RealTimeTrack from "./pages/RealTimeTrack";
import Digital_Transport_Pass from "./pages/Digital_Transport_Pass/Digital_Transport_Pass";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashbaord />} />
        <Route path="/addUsers" element={<AddUsers />} />
        <Route path="/updateUsers" element={<UpdateUsers />} />
        <Route path="/addAdmin" element={<AddAdmin />} />
        <Route path="/updateAdmin" element={<UpdateAdmin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/viewUsers" element={<ViewUsers />} />
        <Route path="/Home" element={<RealTimeTrack />} />
        <Route path="/DigitalTransportPass" element={<Digital_Transport_Pass/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
