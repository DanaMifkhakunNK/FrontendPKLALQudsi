import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/userContect";
import { useNavigate } from "react-router-dom";

function GaleriAdmin() {
  const navigate = useNavigate();
  const { currentUser } = useContext(UserContext);
  const token = currentUser?.token;

  useEffect(() => {
    if (!token) {
      navigate("/admin");
    }
  }, []);
  return (
    <>
      <div className="min-h-screen bg-primary">
        <p>a</p>
      </div>
    </>
  );
}

export default GaleriAdmin;
