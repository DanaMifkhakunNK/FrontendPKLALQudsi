import React, { useState } from "react";
import img from "../assets/logo192.png";
function LoginAdmin() {
  const [adminData, setAdminData] = useState({
    username: "",
    password: "",
  });

  const changeInputHandler = (e) => {
    setAdminData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };
  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <img src={img} alt="Sample image" />
      </div>
      <div className="md:w-1/3 max-w-sm">
        <div className="text-center md:text-left">
          <h3 className="mr-1 mb-2 font-semibold">Admin AL Qudsi</h3>
        </div>
        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded" type="text" placeholder="Email Address" name="username" value={adminData.username} onChange={changeInputHandler} autoFocus required />
        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="password" placeholder="Password" name="password" value={adminData.password} onChange={changeInputHandler} required />
        <div className="text-center md:text-left">
          <button className="mt-4 bg-primary hover:bg-primary/50 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" type="submit">
            Login
          </button>
        </div>
      </div>
    </section>
  );
}

export default LoginAdmin;
