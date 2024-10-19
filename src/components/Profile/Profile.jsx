import React from "react";
import img from "./../../img/ava.jpg";
import classes from "./profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div>
      <div>
        <img src={img} alt="" />
      </div>
      <div>ava + description</div>
      <MyPosts />
    </div>
  );
};
export default Profile;
