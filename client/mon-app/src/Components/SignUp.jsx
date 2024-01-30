import React, { useState } from "react";
import { userSignUp } from "../redux/actions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    const newOne = {
      fullName,
      email,
      password,
      phone,
    };
    dispatch(userSignUp(newOne));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <label>Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>Phone</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <div>
          <button type="submit">SignUp</button>
        </div>
      </form>
      <Link to="/login">
        {" "}
        do you have an account ?
        <br />
        go to Login
      </Link>
    </div>
  );
};

export default SignUp;
