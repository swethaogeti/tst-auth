// import React from "react";
// import { useAuth } from "../AuthProvider";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// const Login = () => {
//   const [userDetails, setUserDetails] = useState({ email: "", password: "" });
//   const { setUser } = useAuth();

//   const changeHandlerSignup = (e) => {
//     e.preventDefault();
//     setUserSignup((prev) => {
//       return {
//         ...prev,
//         [e.target.name]: e.target.value,
//       };
//     });
//   };
//   console.log(userSignup);
//   return (
//     <div>
//       <div>
//         <Link to="/">Home</Link>
//         <h1>Log in</h1>

//         <div>
//           <h3>email</h3>
//           <input
//             name="email"
//             value={userDetails.email}
//             type="text"
//             placeholder="enter your email"
//           ></input>
//         </div>

//         <div>
//           <h3>password</h3>
//           <input
//             name="password"
//             value={userDetails.password}
//             type="password"
//             placeholder="enter your password"
//           ></input>
//         </div>

//         <button>
//           <Link to="/signup">Sign up </Link>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Login;

import axios from "axios";
import React from "react";
import { useState } from "react";
import { useAuth } from "../AuthProvider";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [userDetail, setUserDetail] = useState({ email: "", password: "" });
  const [tester, setTester] = useState({
    email: "adarshbalika@gmail.com",
    password: "adarshbalika",
  });
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const changeHandler = (e) => {
    setUserDetail((previousState) => ({
      ...previousState,
      [e.target.name]: e.target.value,
    }));
  };
  console.log(userDetail);

  const logInUserHandler = async (isTestUser) => {
    try {
      const response = await axios.post(
        "/api/auth/login",
        isTestUser ? tester : userDetail
      );
      console.log(isTestUser);
      setUser({
        user: response.data.foundUser,
        token: response.data.encodedToken,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <main>
        <div>
          <div>
            <Link to="/">
              <div>Home</div>
            </Link>
          </div>
          <h1>Log in</h1>
          <div>
            <h3>Email</h3>
            <input
              name="email"
              onChange={(e) => changeHandler(e)}
              value={userDetail.email}
              type="text"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <h3>Password</h3>
            <input
              name="password"
              onChange={(e) => changeHandler(e)}
              value={userDetail.password}
              type="password"
              placeholder="Enter your password"
            />
          </div>

          <button
            style={{ marginTop: "1rem", marginRight: "0.5rem" }}
            onClick={() => logInUserHandler(false)}
          >
            Log in
          </button>
          <button
            onClick={() => {
              logInUserHandler(true);
            }}
          >
            login with test data
          </button>
          <div style={{ marginTop: "1rem" }}>
            {" "}
            <Link to="/signup">
              <div>Sign up instead</div>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
