import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
const ImageContainer = () => {
  const navigate = useNavigate();
  const image = useSelector((state) => state.image);
  return (
    <>
      <Header />
      <div style={{ backgroundColor: "bisque" }}>
        {image.map((imagetitle, index) => (
          <h1
            key={index}
            style={{ marginBottom: "0%" }}
            onClick={() => navigate(`/image?id=${imagetitle.id}`)}
          >
            {imagetitle.title}
          </h1>
        ))}
      </div>
      <Footer />
    </>
  );
};
// use keys while using map
//  try to use classes for styling

export default ImageContainer;
