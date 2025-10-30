import React, { useEffect, useState } from "react";
import axios from "axios";

function Dashboard({ token }) {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/dashboard", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setMessage(res.data.message))
      .catch(() => setMessage("Failed to load dashboard"));
  }, [token]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <p>{message}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
