import Navbar from "./component/Navbar";
import { Routes, Route } from "react-router-dom";
import {Login} from "./pages/Login/Login";
import { useLocation } from "react-router-dom";



function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen w-[100%]">
      <div className="flex flex-col">
        {/* <Navbar /> */}
      </div>
      <Routes>
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
