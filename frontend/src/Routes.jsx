import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Info from "./Info";
import Page from "./Page";
import GameShowcase from "./GameShowcase";
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
            </Switch>
        </Router>
    );
};

export default SiteRouter;
