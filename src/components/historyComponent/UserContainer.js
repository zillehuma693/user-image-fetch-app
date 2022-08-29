import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
const UserContainer = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  return (
    <>
      <Header />
      <div style={{ backgroundColor: "bisque" }}>
        {user.map((usertitle, index) => (
          <h1
            key={index}
            style={{ marginBottom: "0%" }}
            onClick={() => navigate(`/users?id=${usertitle.id}`)}
          >
            {usertitle.title}
          </h1>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default UserContainer;
