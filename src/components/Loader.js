import React from "react";
import Loading from "../assets/Loader.gif";
function Loader() {
  return (
    <div className="container flex justify-center min-h-screen items-center">
      <div>
        <img src={Loading} />
      </div>
    </div>
  );
}

export default Loader;
