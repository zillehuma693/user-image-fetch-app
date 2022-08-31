import React from "react";
import { useNavigate } from "react-router-dom";
const Grid = ({ images }) => {
  const navigate = useNavigate();
  const goToProfile = (props) => {
    console.log(props);
    navigate(`/profile/${props}`);
  };
  return (
    <section className="no-touch">
      <div className="wrapuser">
        {images.map((image, index) => (
          <div className="user-box" key={index}>
            <div className="card" onClick={() => goToProfile(image.username)}>
              <div className="image">
                <img src={image.profile_image.large} alt={""}/>
              </div>
              <div className="container">
                <h4>
                  <b>{image.name}</b>
                </h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Grid;
