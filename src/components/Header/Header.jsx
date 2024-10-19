import React from "react";
import img from "./../../img/logo.png";
import classes from "./header.module.css";
const Header = () => {
  return (
    <header className={classes.header}>
      <img src={img} alt="" />
    </header>
  );
};
export default Header;
