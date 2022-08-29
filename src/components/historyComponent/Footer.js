import React from "react";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <NavLink to="/home">
        <button style={{ marginLeft: "40%" }}>Back to Home Page</button>
      </NavLink>
    </>
  );
};

export default Footer;
