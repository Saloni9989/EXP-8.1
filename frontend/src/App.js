import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <Router>
      <div className="App">
        <h1>🔐 JWT Auth Application</h1>
        <Routes>
          <Route path="/" element={<Login setToken={setToken} />} />
          <Route
            path="/dashboard"
            element={<ProtectedRoute token={token}><Dashboard token={token} /></ProtectedRoute>}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
