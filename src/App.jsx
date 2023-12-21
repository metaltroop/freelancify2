import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./pages/Login/Login";
import { Register } from "./pages/Register/Register";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Signinup from "./pages/SignINUP/Signinup";
import Landing from "./pages/Landing";

function App() {
  const location = useLocation();
  const [direction, setDirection] = useState("forward");

  return (
    <div className="min-h-screen w-[100%]">
      <Landing/>
      <Routes location={location}>
        <Route
          path="/Login"
          element={<Login direction={direction} setDirection={setDirection} />}
        />
        <Route
          path="/Register"
          element={
            <Register direction={direction} setDirection={setDirection} />
          }
        />
        <Route path="/signinup" element={<Signinup />} />
        <Route path="/Landing" element={<Landing />} />
      
        <Route path="/" element={<Navigate to="/" replace />} />
      </Routes>
    </div>

  );
}

export default App;
