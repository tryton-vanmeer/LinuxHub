import * as React from "react";
import * as ReactDOM from "react-dom";
import {BrowserRouter, Router, Route, Switch} from "react-router-dom";
import { createBrowserHistory } from 'history'
import Header from "./components/header";
import Home from "./routes/home"
import "./sass/main.scss";

ReactDOM.render((
    <BrowserRouter>
        <Header />

        <Router history={createBrowserHistory()}>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/distro" component={Home} />
            </Switch>
        </Router>
    </BrowserRouter>
), document.getElementById("root"));