import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from 'history'
import Header from "./components/header";
import Home from "./routes/home"
import Distro from "./routes/distro";
import "./sass/main.scss";

ReactDOM.render((
    <BrowserRouter>
        <Router history={createBrowserHistory()}>
            <Header />

            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={Home} />
                <Route path="/:distro" component={Distro} />
            </Switch>
        </Router>
    </BrowserRouter>
), document.getElementById("root"));