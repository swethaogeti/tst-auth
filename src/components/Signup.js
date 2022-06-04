import React, { useState } from "react";
import { useAuth } from "../AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Signup = () => {
  const { setUser } = useAuth();

  const [userSignup, setUserSignup] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  });
  const navigate = useNavigate();
  const changeHandlerSignup = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUserSignup((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  console.log(userSignup);
  const signupUserHandler = async () => {
    try {
      const response = await axios.post("/api/auth/signup", userSignup);
      console.log(response);
      setUser({
        user: response.data.createdUser,
        token: response.data.encodedToken,
      });
      // localStorage.setItem("token", response.data.encodedToken);
      navigate("/");
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div>
      <div>
        <Link to="/">home</Link>
      </div>
      <div>
        <h1>Sign up</h1>
        <div>
          <h3>email</h3>
          <input
            name="email"
            value={userSignup.email}
            type="text"
            placeholder="enter email"
            onChange={changeHandlerSignup}
          ></input>
        </div>

        <div>
          <h3>enter firstName</h3>
          <input
            name="firstName"
            value={userSignup.firstName}
            type="text"
            placeholder="enter firstname"
            onChange={changeHandlerSignup}
          ></input>
        </div>

        <div>
          <h3>enter last name</h3>
          <input
            name="lastName"
            value={userSignup.lastName}
            type="text"
            placeholder="enter lastname"
            onChange={(e) => changeHandlerSignup(e)}
          ></input>
        </div>

        <div>
          <h3>enter password</h3>
          <input
            name="password"
            value={userSignup.password}
            type="password"
            placeholder="enter password"
            onChange={(e) => changeHandlerSignup(e)}
          ></input>
        </div>

        <button style={{ marginTop: "1rem" }} onClick={signupUserHandler}>
          create account
        </button>
        <div style={{ marginTop: "1rem" }}>
          <Link to="/login">Already have account</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
