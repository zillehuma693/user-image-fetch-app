import React, { useState } from "react";
import "../style/App.css";
import Search from "../components/userComponent/usersearchbar";
function Home() {
  const [images, setImages] = useState([]);
  return (
    <div className="main">
      <Search images={images} setImages={setImages} />
    </div>
  );
}

export default Home;
