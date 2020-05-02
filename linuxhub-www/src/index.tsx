import * as React from "react";
import * as ReactDOM from "react-dom";
import {BrowserRouter, Router, Route, Switch} from "react-router-dom";
import { createBrowserHistory } from 'history'
import Index from "./views/index"
import "./sass/main.scss";

ReactDOM.render((
    <BrowserRouter>
        <Router history={createBrowserHistory()}>
            <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/distro" component={Index} />
            </Switch>
        </Router>
    </BrowserRouter>
), document.getElementById("root"));