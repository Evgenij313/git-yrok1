import React from "react";
import classes from "./dialogs.module.css";
import { NavLink } from "react-router-dom";
const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <div className={`${classes.dialog} ${classes.active}`}>
          <NavLink to="/dialogs/1">Dimych</NavLink>
        </div>
        <div className={classes.dialog}>
          <NavLink to="/dialogs/2">Andrey</NavLink>
        </div>
        <div className={classes.dialog}>
          <NavLink to="/dialogs/3">Sveta</NavLink>
        </div>
        <div className={classes.dialog}>
          <NavLink to="/dialogs/4">Anna</NavLink>
        </div>
        <div className={classes.dialog}>
          <NavLink to="/dialogs/5">Sasha</NavLink>
        </div>
        <div className={classes.dialog}>
          <NavLink to="/dialogs/6">Tany</NavLink>
        </div>
      </div>
      <div className={classes.messages}>
        <div className={classes.dialog}>Hi</div>
        <div className={classes.dialog}>How is your tramal77</div>
        <div className={classes.dialog}>Yo</div>
      </div>
    </div>
  );
};
export default Dialogs;
