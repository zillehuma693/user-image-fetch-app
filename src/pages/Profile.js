import React from "react";
import "../style/profile.css";
import { useParams } from "react-router-dom";
import { profileApi } from "../lib/apis/unsplash";
import { useEffect, useState } from "react";

const Profile = () => {
  let { username } = useParams();
  const [user, setUser] = useState("");
  const [work, setWork] = useState("");
  useEffect(() => handlerProfile(work), []);

  const handlerProfile = () => {
    profileApi(username)
      .then((res) => {
        if (res.data.results[0].for_hire === true) {
          setWork("Available for work");
        } else {
          setWork("Not Available for work");
        }
        setUser(res.data.results[0]);
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <>
      <div className="header">
        <div className="profile-image">
          <img src={user.profile_image?.large}></img>
        </div>
      </div>

      <div className="name">
        <h1>{user.name}</h1>
      </div>
      <div className="intro">
        <p>Bio: {user.bio}</p>
      </div>
      <div className="list">
        <a className="work"> {work}</a>
        <a className="support" href="https://www.paypal.com/">
          {" "}
          Support via PayPal
        </a>
        <a> Locattion: {user.location}</a>
        <a> Instagram: {user.instagram_username}</a>
      </div>
      <div>
        <h1>Interest</h1>
      </div>
      <div className="interest">
        <div className="ilist">
          <a> mountain</a>
        </div>
        <div className="ilist">
          <a> animal</a>
        </div>
        <div className="ilist">
          <a> forest</a>
        </div>
        <div className="ilist">
          <a>outdoor</a>
        </div>
      </div>
      <div>
        <h1>Photos</h1>
      </div>
      <div className="related">
        {user.photos?.map((item, index) => (
          <div key={index}>
            <img src={item.urls.full}></img>
          </div>
        ))}
      </div>
    </>
  );
};

export default Profile;
