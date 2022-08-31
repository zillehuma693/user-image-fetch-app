import React from "react";
import { NavLink } from "react-router-dom";
import "../style/App.css";
const DashBoard = () => {
  return (
    <div>
      <ul>
        <NavLink to="/home">
          <li>
            <a className="active" href="/">
              Home{" "}
              <img
                className="icon"
                src="https://img.icons8.com/ios/344/home--v1.png"
                alt=""
              />
            </a>
          </li>
        </NavLink>
        <NavLink to="/about">
          {" "}
          <li>
            <a className="active" href="">
              About{" "}
              <img
                className="icon"
                src="https://img.icons8.com/external-others-iconmarket/344/external-about-essential-others-iconmarket.png"
              alt=""/>
            </a>
          </li>
        </NavLink>
        <NavLink to="/users">
          {" "}
          <li>
            <a className="active" href="/users">
              Users{" "}
              <img
              alt=""
                className="icon"
                src="https://img.icons8.com/ios/344/user--v1.png"
              />
            </a>
          </li>
        </NavLink>
        <NavLink to="/image">
          {" "}
          <li>
            <a className="active" href="">
              Images{" "}
              <img
              alt=""
                className="icon"
                src="https://img.icons8.com/ios/344/image.png"
              />
            </a>
          </li>
        </NavLink>
        <NavLink to="/history">
          {" "}
          <li>
            <a className="active" href="">
              History{" "}
              <img
                className="icon"
                src="https://img.icons8.com/ios/344/historical.png"
              />
            </a>
          </li>
        </NavLink>
        <li>
          <a
            className="active"
            href="https://www.instagram.com/accounts/login/"
          >
            Instagram{" "}
            <img
            alt=""
              className="icon"
              src="https://img.icons8.com/ios/344/instagram-new--v1.png"
            />
          </a>
        </li>
        <li>
          <a className="active" href="https://www.linkedin.com/">
            Linkedin{" "}
            <img
            alt=""
              className="icon"
              src="https://img.icons8.com/ios/344/linkedin.png"
            />
          </a>
        </li>
        <li>
          <a className="active" href="https://www.facebook.com/">
            Facebook{" "}
            <img
            alt=""
              className="icon"
              src="https://img.icons8.com/ios/344/facebook-new.png"
            />
          </a>
        </li>
      </ul>
      <img
      alt=""
        className="home-img"
        src="https://www.pngmart.com/files/3/Welcome-PNG-HD.png"
      />
    </div>
  );
};

export default DashBoard;
