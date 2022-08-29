import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div>
        <h1 style={{ paddingLeft: "42%" }}>Browsed History</h1>
        <div>
          <NavLink to="/history/images">
            <button style={{ marginLeft: "25%" }}>Images</button>
          </NavLink>
          <NavLink to="/history/users">
            <button style={{ marginLeft: "20%" }}>User</button>
          </NavLink>
        </div>
      </div>
    </>
  );
};
export default Header;
