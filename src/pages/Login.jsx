import React from "react";
import Logo from '../assets/with-text.png';


export const Login = () => {
  return (
    <div className="flex  flex-wrap justify-between  "  >

      <div className="fixed w-[40%] h-[100vh] top-0  bg-[#6aace6] rounded-[0px_50px_50px_0px]">
        <img src={Logo} alt="logo" className="h-50px w-50px" />
      </div>
      <div style={{backgroundImage: 'url="'}}>
        <h1>Login</h1>
      </div>
    </div>
  );
};
