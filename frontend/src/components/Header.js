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
        scroll={(el) => el.scrollIntoView({behavior: "smooth", block: "nearest"})}
        to={`${location.pathname}#${to}`}
        props={props}
    >
        {props.children}{" "}
    </Button>
);

const HashButton = withRouter(RawHashButton);

const styles = {
    root: {},
    title: {
        fontFamily: "ElectricBoots",
    },
    toolbar: {
        padding: "16px",
        display: "grid",
        gridTemplateColumns: "1fr 0.5fr 1fr",
        justifyContent: "center",
        alignItems: "center",
    },
    toolbarLogo: {
        width: "69px",
        marginTop: "12px",
    },
    toolbarLogoA: {
        textAlign: "center",
    },
    toolbarButtons: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
    },
    toolbarButton: {
        flexGrow: "1",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    menuButton: {
        margin: "0",
    },
    sidebarButtons: {
        padding: "0 16px",
        minWidth: "15vw",
    },
    sidebarLogo: {
        width: "69px",
        padding: "16px",
        marginTop: "12px",
    },
    blurBox: {
        position: "absolute",
        top: "0",
        left: "0",
        height: "100%",
        width: "100%",
        zIndex: "-1",
        backdropFilter: "blur(6.90px)",
    },
};

const Header = ({ classes, position, history, location, ...props }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <>
            <AppBar position={position}>
                <Toolbar className={cn(classes.toolbar)}>
                    <Typography variant="h4" className={cn(classes.title)}>
                        electronic game developers society
                    </Typography>
                    <a href="/" className={cn(classes.toolbarLogoA)}>
                        <img
                            src={logo}
                            alt="gamer"
                            className={cn(classes.toolbarLogo)}
                        />
                    </a>
                    <div className={cn(classes.toolbarButtons)}>
                        <div className={cn(classes.toolbarButton)}>
                            <HashButton to="info">about us</HashButton>
                        </div>
                        <div className={cn(classes.toolbarButton)}>
                            <Button to="game-showcase" onClick={() => history.push("/gameshowcase")}> game showcase </Button>
                        </div>
                        <div className={cn(classes.toolbarButton)}>
                            <IconButton
                                edge="start"
                                className={classes.menuButton}
                                color="inherit"
                                aria-label="menu"
                                onClick={() => setDrawerOpen(!drawerOpen)}
                            >
                                <MoreHorizIcon />
                            </IconButton>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                variant="temporary"
                disableRestoreFocus="false"
            >
                <div className={cn(classes.blurBox)}></div>
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
