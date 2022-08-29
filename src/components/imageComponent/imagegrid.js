import React from "react";

const Grid = ({ images }) => {
  return (
    <section className="no-touch">
      <div className="wrap">
        {images.map((image, index) => (
          <div className="box" key={index}>
            <div className="boxInner" id="img-root">
            <img src={image.urls.small} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Grid;
