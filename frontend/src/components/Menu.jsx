import { React, useState } from "react";
import { SwipeableDrawer } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { withRouter } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import cn from "classnames";

const styles = {
    root: {},
};

const TempDrawer = (open, ...props) => {
    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <SwipeableDrawer anchor="right" open={open} onClose={toggleDrawer}>
            <p>hihihih</p>
        </SwipeableDrawer>
    );
};

const Menu = ({ classes, position, history, ...props }) => {
    return <SwipeableDrawer></SwipeableDrawer>;
};

// Menu = withRouter(withStyles(styles)(Menu)) ;
// export Menu;
export default TempDrawer;
