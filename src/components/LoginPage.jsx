// LoginPage.js
import React, { useState } from "react";
import "./LoginPage.css";

function LoginPage() {
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === "itsmybirthday") {
      // Redirect to main page
      window.location.href = "/main";
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Hey, it's your birthday</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="password"
          placeholder="Type password to enter"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />
        <button type="submit" className="login-button">
          Enter
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
