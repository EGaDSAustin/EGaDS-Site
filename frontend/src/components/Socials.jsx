import React from 'react';
import { Typography, Box, Link, SvgIcon } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import cn from "classnames";

import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import MailIcon from "@material-ui/icons/Mail";
import YouTubeIcon from "@material-ui/icons/YouTube";

import { ReactComponent as DiscordIcon } from "../assets/Discord-Logo-White.svg";


const styles = (theme) => ({
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
  paragraph: {
      fontFamily: "inherit",
  },
  centerBox: {
      textAlign: "center",
      textShadow: "0px 2px 1px rgba(0,0,0,0.3)",
  },
  social: {
      paddingLeft: "20px",
      paddingRight: "20px",
      color: "inherit",
  },
  titleMiddle: {
    color: theme.palette.text.title,
    padding: "16px",
    fontFamily: "inherit",
    fontWeight: "bold",
    textAlign: "center",
    textShadow: "0px 2px 1px rgba(0,0,0,0.3)",
  },
  transparentBox: {
      backgroundColor: "rgba(0,0,0,0.2)",
      borderRadius: "32px",
      padding: "16px",
      "&:hover": {
          backgroundColor: "rgba(0,0,0,0.30)",
      },
  },
  inlineBlock: {
      display: "inline-block",
  },
  lessTopPadding: {
      paddingTop: "20px",
  },
  lessTopMargin: {
    marginTop: "0px",
  },
});


const Socials = ({ classes, ...props }) => {
  let header;
  if(props.headerText != null) {
      header = 
        <Typography
            variant="h4"
            className={cn(classes.titleMiddle)}
        >
            {props.headerText}
        </Typography>;
  }
  
  return (
    <Box
      className={cn(classes.box1, classes.centerBox)}
      id="socialMedia"
    >
      {header}

      <Box
          className={cn(
              classes.transparentBox,
              classes.lessTopPadding,
              classes.inlineBlock
          )}
      >
          <Typography
              className={cn(classes.paragraph)}
              align="center"
          >
              <Link
                  href="https://discord.com/invite/JnNPF6d"
                  target="_blank"
                  rel="noopener"
                  className={cn(classes.social)}
              >
                  <SvgIcon
                      component={DiscordIcon}
                      viewBox="0 0 220 220"
                      fontSize="large"
                  />
              </Link>
              <Link
                  href="https://facebook.us16.list-manage.com/subscribe?u=91470f849ef822234cb47861a&id=34673605c6"
                  target="_blank"
                  rel="noopener"
                  className={cn(classes.social)}
              >
                  <MailIcon fontSize="large" />
              </Link>
              <Link
                  href="https://twitter.com/EGaDSAustin"
                  target="_blank"
                  rel="noopener"
                  className={cn(classes.social)}
              >
                  <TwitterIcon fontSize="large" />
              </Link>

              <Link
                  href="https://www.facebook.com/groups/egadsaustin"
                  target="_blank"
                  rel="noopener"
                  className={cn(classes.social)}
              >
                  <FacebookIcon fontSize="large" />
              </Link>
              <Link
                  href="https://www.youtube.com/user/egadsaustin"
                  target="_blank"
                  rel="noopener"
                  className={cn(classes.social)}
              >
                  <YouTubeIcon fontSize="large" />
              </Link>
          </Typography>
      </Box>
    </Box>
  );
};

export default withStyles(styles)(Socials);