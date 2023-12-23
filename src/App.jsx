import { Routes, Route, Navigate } from "react-router-dom";

import { useLocation } from "react-router-dom";
import { useState } from "react";
import Signinup from "./pages/SignINUP/Signinup";
import Landing from "./pages/Landing";
import Signin from "./pages/Login/Signin";
import Signup from "./pages/Register/Signup";

function App() {
  const location = useLocation();
  const [direction, setDirection] = useState("forward");

  return (
    <div className="min-h-screen w-[100%]">
      <Landing/>
      <Routes location={location}>
        <Route
          path="/Signin"
          element={<Signin direction={direction} setDirection={setDirection} />}
        />
        <Route
          path="/Signup"
          element={
            <Signup direction={direction} setDirection={setDirection} />
          }
        />
        <Route path="/signinup" element={<Signinup />} />
        <Route path="/Landing" element={<Landing />} />
        <Route path="/Signin" element={<Signin />} />
      
        <Route path="/" element={<Navigate to="/" replace />} />
      </Routes>
    </div>

  );
}

export default App;
