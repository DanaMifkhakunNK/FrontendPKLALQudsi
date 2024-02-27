import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/userContect";
import { useNavigate } from "react-router-dom";

function TestiAdmin() {
  const navigate = useNavigate();
  const { currentUser } = useContext(UserContext);
  const token = currentUser?.token;

  useEffect(() => {
    if (!token) {
      navigate("/admin");
    }
  }, []);
  return (
    <div>
      <p>1</p>
    </div>
  );
}

export default TestiAdmin;
