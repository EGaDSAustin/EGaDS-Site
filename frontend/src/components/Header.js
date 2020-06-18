import React, { useState } from "react";
import { withStyles } from "@material-ui/styles";
import {
    Typography,
    AppBar,
    Toolbar,
    Button,
    IconButton,
    List,
    ListItem,
    Drawer,
} from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import cn from "classnames";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import logo from "../egadscontroller2.png";

const RawHashButton = ({ location, to, ...props }) => (
    <Button
        component={HashLink}
        scroll={(el) => el.scrollIntoView({ behavior: "smooth" })}
        to={`${location.pathname}#${to}`}
        props={props}
    >
        {props.children}{" "}
    </Button>
);

const HashButton = withRouter(RawHashButton);

const styles = {
    root: {},
    toolBarLinks: {
        marginLeft: "auto",
    },
    logo: {
        position: "absolute",
        left: "calc(50% - 30px)",
        top: "calc(50% - 25px)",
        align: "center",
    },
    logoImg: {
        width: 60,
    },
    grow: {
        flexGrow: 1,
    },
    title: {
        maxWidth: "calc(50% - 60px)",
        fontFamily: "ElectricBoots",
    },
    bar: {
        padding: "16px",
    },
    sidebarButtons: {
        padding: "0 16px",
        width: "15vw",
    },
    sidebarLogo: {
        width: "64px",
        padding: "16px",
    },
};

const Header = ({ classes, position, history, location, ...props }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <>
            <AppBar position={position}>
                <Toolbar className={cn(classes.bar)}>
                    <Typography variant="h4" className={cn(classes.title)}>
                        electronic game developers society
                    </Typography>
                    <div className={cn(classes.grow)} />
                    <div className={cn(classes.logo)}>
                        <a href="/">
                            <img
                                src={logo}
                                // src="http://pngimg.com/uploads/soviet_union/soviet_union_PNG54.png"
                                alt="gamer"
                                className={cn(classes.logoImg)}
                            />
                        </a>
                    </div>

                    <div className={cn(classes.grow)} />
                    <div className={cn(classes.grow)} />
                    <div className={cn(classes.grow)} />

                    <HashButton to="info">info</HashButton>
                    <div className={cn(classes.grow)} />
                    <Button onClick={() => history.push("/bug")}> bug </Button>
                    <div className={cn(classes.grow)} />
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                        onClick={() => setDrawerOpen(!drawerOpen)}
                    >
                        <MoreHorizIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                variant="temporary"
            >
                <img
                    src={logo}
                    // src="http://pngimg.com/uploads/soviet_union/soviet_union_PNG54.png"
                    alt="gamer"
                    className={cn(classes.sidebarLogo)}
                />
                <List className={classes.sidebarButtons}>
                    <ListItem>
                        <HashButton to="info">ABOUT US</HashButton>
                    </ListItem>
                    <ListItem>
                        <HashButton to="login">LOG IN</HashButton>
                    </ListItem>
                    <ListItem>
                        <HashButton to="gameShowcase">
                            GAMES SHOWCASE
                        </HashButton>
                    </ListItem>
                    <ListItem>
                        <HashButton to="socialMedia">
                            SOCIAL MEDIA/NEWS
                        </HashButton>
                    </ListItem>
                    <ListItem>
                        <HashButton to="resources">RESOURCES</HashButton>
                    </ListItem>
                    <ListItem>
                        <HashButton to="contact">CONTACT US</HashButton>
                    </ListItem>
                </List>
            </Drawer>
        </>
    );
};

export default withRouter(withStyles(styles)(Header));
