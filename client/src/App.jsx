import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashbaord from "./components/dashboard/dashboard";
import AddUsers from "./components/addUsers/addUsers";
import UpdateUsers from "./components/updateUsers/updateUsers";
import AddAdmin from "./components/addAdmin/addAdmin";
import UpdateAdmin from "./components/updateAdmin/updateAdmin";
import Login from "./components/login/login"
import SignUp from "./components/login/SignUp"
import RealTimeTrack from "./pages/RealTimeTrack";


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
        <Route path="/Home" element={<RealTimeTrack />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
