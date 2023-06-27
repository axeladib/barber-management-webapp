import React, { useState } from "react";
import axios from "axios";
// import {setToken} from ".../utils/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(email);
  const handleLogin = async () => {
    try {
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input
        type="email"
        placeholder="Enter your email address"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        type="password"
        placeholder="Enter your passsword"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
