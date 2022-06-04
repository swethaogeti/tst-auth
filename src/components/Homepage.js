import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      <nav>
        <Link to="/about">About</Link>
        {"|| "}
        <Link to="/login">login</Link>
        {"|| "}
        <Link to="signup">signup</Link>
        {"||"}
        <Link to="/videos">videos</Link>
      </nav>
    </div>
  );
};

export default Homepage;
