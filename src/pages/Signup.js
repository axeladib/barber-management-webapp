import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSingup = async () => {
    //TODO: Send signup data to the backend
    try {
      const response = await axios.post("/signup", {
        username,
        email,
        phone,
        password,
      });
      //FIXME: Test the success meesage or redirect to a success page
      console.log(response.data);
    } catch (error) {
      //FIXME: Handle error
      console.error(error);
    }
  };

  return (
    <>
      <h1>Signup Page</h1>
      {/* //TODO: Username */}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
     {/* //TODO: Email  */}
     <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
     {/* TODO: Phone Number */}
     <input
        type="tel"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
     {/* TODO: Password */}
     <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSingup}>Sign up</button>
     </>
  );
};

export default Signup;
