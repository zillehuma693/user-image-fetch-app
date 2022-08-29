import React, { useState } from "react";
import "../style/image.css";
import Search from "../components/imageComponent/imagesearchbar";

function ImageMain() {
  const [images, setImages] = useState([]);
  return (
    <div className="main">
      <Search images={images} setImages={setImages} />
    </div>
  );
}

export default ImageMain;
// page logical container 