//import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
// import { red, green, indigo } from "@material-ui/core/colors";
// import Theme from Theme.json;

const EGaDSTheme = createMuiTheme({
    palette: {
        common: {
            black: "rgba(255, 255, 255, 1)",
            white: "rgba(255, 0, 0, 1)",
        },
        background: {
            paper: "rgba(60, 60, 60, .33)",
            default: "rgba(20, 20, 20, .5)",
            contrastText: "rgba(255, 255, 255, 1)",
        },
        primary: {
            light: "rgba(0, 0, 255, 1)",
            main: "rgba(0, 0, 142, 1)",
            dark: "#303f9f",
            contrastText: "rgba(255, 255, 255, 1)",
        },
        secondary: {
            light: "#ff4081",
            main: "rgba(138, 90, 107, 1)",
            dark: "rgba(87, 14, 47, 1)",
            contrastText: "rgba(255, 255, 255, 1)",
        },
        error: {
            light: "rgba(255, 215, 215, 1)",
            main: "rgba(255, 38, 20, 1)",
            dark: "rgba(131, 0, 0, 1)",
            contrastText: "#fff",
        },
        text: {
            primary: "rgba(255, 255, 255, 0.87)",
            secondary: "rgba(204, 204, 204, 0.54)",
            disabled: "rgba(134, 113, 113, 0.38)",
            hint: "rgba(233, 202, 243, 1)",
            title: "rgba(19, 166, 240, 1)",
        },
        gradient: {
            primary: "rgb(15,8,18)",
            secondary: "rgb(17, 87, 129)",
            tertiary: "rgb(19, 166, 240)",
        },
    },
    overrides: {
        MuiButton: {
            root: {
                fontFamily: "inherit",
            },
        },
        MuiAppBar: {
            colorPrimary: {
                backgroundColor: "rgb(24,24,24)",
            },
        },
    },
});

export default EGaDSTheme;
