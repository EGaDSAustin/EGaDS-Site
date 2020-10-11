import React from "react";
import { Typography, Box } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import cn from "classnames";

const styles = (theme) => ({
    root: {
        backgroundColor: theme.palette.background.default,
        backgroundImage: `linear-gradient(${theme.palette.gradient.primary} 0%, ${theme.palette.gradient.secondary} 75%, ${theme.palette.gradient.tertiary} 100%)`,
    },
    box0: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        width: "69%",
        padding: "32px",
        margin: "16px auto",
        position: "relative",
    },
    box1: {
        padding: "32px",
        color: theme.palette.text.primary,
        width: "50%",
        minWidth: "300px",
        position: "relative",
        zIndex: "2",
        boxSizing: "border-box",
        fontFamily: "inherit",
    },
    blurBox: {
        position: "absolute",
        top: "0",
        left: "0",
        height: "100%",
        width: "100%",
        backgroundColor: "rgba(0,0,0,0.069420)",
        zIndex: "1",
        borderRadius: "8px",
        backdropFilter: "blur(4.20px)",
    },
    leftBox: {
        textAlign: "right",
        textShadow: "-1px 2px 1px rgba(0,0,0,0.3)",
    },
    bestBoye: {
        width: "100%",
        verticalAlign: "top",
        borderRadius: "6.90px",
    },
    bestBoyeBox: {
        border: "4px solid white",
        borderRadius: "6.90px",
        padding: "0",
        width: "100%",
        display: "inline-block",
        margin: "auto",
        position: "relative",
    },
    boxShadowRight: {
        boxShadow: "8px 8px 4px rgba(0,0,0,0.3)",
    },
    bestBoyeBorderRight: {
        position: "absolute",
        border: `4px solid ${theme.palette.text.title}`,
        width: "100%",
        height: "100%",
        top: "2.5px",
        left: "4px",
        borderRadius: "6.90px",
    },
    titleLeft: {
        color: theme.palette.text.title,
        padding: "8px",
        paddingRight: "0",
        fontFamily: "inherit",
        fontWeight: "bold",
        textShadow: "-1px 2px 1px rgba(0,0,0,0.3)",
    },
    paragraph: {
        fontFamily: "inherit",
    },
});

const SplashCardLeft = ({ classes, title, description, img,...props }) => {
    return (
        <Box className={cn(classes.box0)}>
            <Box className={cn(classes.blurBox)}></Box>
            <Box className={cn(classes.box1, classes.leftBox)}>
                <Typography
                    variant="h4"
                    className={cn(classes.titleLeft)}
                >
                    {title}
                </Typography>
                <Typography className={cn(classes.paragraph)}>
                    {description}
                </Typography>
            </Box>
            <Box className={cn(classes.box1)}>
                <Box
                    className={cn(
                        classes.bestBoyeBox,
                        classes.boxShadowRight
                    )}
                >
                    <img
                        src={img}
                        alt="a very good boye"
                        className={cn(classes.bestBoye)}
                    />
                    <div
                        className={cn(classes.bestBoyeBorderRight)}
                    ></div>
                </Box>
            </Box>
        </Box>
    );
};
export default withStyles(styles)(SplashCardLeft);