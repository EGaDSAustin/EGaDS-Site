import React from 'react';
import { Container, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import cn from "classnames";

import goodboye from "../assets/goodboye.png";
import Socials from './Socials';


const styles = (theme) => ({
  footer: {
    backgroundColor: theme.palette.primary,
    color: "#1296da",
  },
  inlineBlock: {
      display: "inline-block",
  },
  heWoof: {
    width: "15%",
    "&:hover": {
        color: "black",
    },
  },
  goodBoye: {
    width: "100%",
    position: "relative",
  },

});

const Bork = ({ classes, ...props }) => {
    let socials;
    if(props.socials === "yes") {
      socials = <Socials />;
    } else {
      socials = <div></div>;
    }
    return (
        <Container align="center" className={cn(classes.footer)}>
            <div className={cn(classes.inlineBlock, classes.heWoof)}>
                <Typography align="center">
                  {props.woof}
                </Typography>
                <img
                    src={goodboye}
                    alt="a very good boye"
                    className={cn(classes.goodBoye)}
                />
                
            </div>
            {socials}
        </Container>
    );
};

export default withStyles(styles)(Bork);