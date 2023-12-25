import { Routes, Route, Navigate } from "react-router-dom";
import Footer from "./component/footer";
import { useLocation } from "react-router-dom";
import { useState } from "react";

import Landing from "./pages/Landing/Landing";
import Signin from "./pages/Login/Signin";
import Signup from "./pages/Register/Signup";

function App() {
  const location = useLocation();
  const [direction, setDirection] = useState("forward");

  return (
    <div className="min-h-screen w-[100%]">
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
        <Route path="/Landing" element={<Landing />} />
        <Route path="/Signin" element={<Signin />} />
      
        <Route path="/" element={<Navigate to="/landing" replace />} />
      </Routes>
      <Footer />
    </div>

  );
}

export default App;
