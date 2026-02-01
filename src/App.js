import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/Pages/Loginpage.js";
import Createlogin from "./components/Pages/CreateLogin.js";
import EmployeeLogin from "./components/Pages/EmployeeLogin.js";
import MyHomepage from "./components/Pages/Myhomepage.js";
function MyRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/home" element={<MyHomepage/>}></Route>
          <Route path="/signup" element={<Createlogin/>}></Route>
          <Route path="/elogin" element={<EmployeeLogin/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </>
  );
}
function App() {
  return <MyRoutes/>;
}

export default App;
