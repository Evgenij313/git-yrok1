import React from "react";
import classes from "./Post.module.css";
import img from "../../../../img/IM.jpg";
const Post = () => {
  return (
    <div className={classes.item}>
      <img src={img} alt="00" />
      post 1
      <div>
        <span>like</span>
      </div>
    </div>
  );
};
export default Post;
