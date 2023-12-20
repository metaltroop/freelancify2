import Navbar from "./component/Navbar";
import { BrowserRouter, Routes, Router, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { useLocation } from "react-router-dom";


function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen mt-4">
      <div className="flex flex-col">
        <Navbar />
      </div>
      <Routes>
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
