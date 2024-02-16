import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { useState } from "react";
import Dashboard from './pages/Dashboard';
import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/Navbar";
function App() {

  const [IsLoggedIn,setIsLoggedIn] = useState(false);
  return (
      <div className="w-screen h-screen bg-richblack-900 flex flex-col">
        <Navbar IsLoggedIn={IsLoggedIn} setIsLoggedIn= {setIsLoggedIn}/>

        <Routes>
          <Route path="/" element={<Home IsLoggedIn={IsLoggedIn}/>}/>
          <Route path="/login" element={<Login  setIsLoggedIn={setIsLoggedIn}/> }/>

          <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
          <Route path="/dashboard" element={<PrivateRoute 
          IsLoggedIn={IsLoggedIn}>
              <Dashboard/>
          </PrivateRoute>}/>
        </Routes>
      </div>
    )
}

export default App;
