import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Page from "./Page";
import GameShowcase from "./GameShowcase";
// import GameJam from "./jam/app.jsx";
import Header from "./components/Header.js";

const SiteRouter = (props) => {
    return (
        <Router>
            <Header position="static" />
            <Switch>
                <Route exact path="/">
                    <Page />
                </Route>
                <Route path="/GameShowcase">
                    <GameShowcase />
                </Route>
                {/* <Route path="/GameJam">
                    <GameJam />
                </Route> */}
            </Switch>
        </Router>
    );
};

export default SiteRouter;
