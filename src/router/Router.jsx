import React,{Component}from "react";
import {BrowserRouter, HashRouter, Redirect, Route,Router} from "react-router-dom";
import hello from "../component/Hello";
import App from "../app";
const history = BrowserRouter;


const RouteConfig = (
    <HashRouter history={history}>
        <App>
            <Route exact path="/" component={hello}/>
            <Route path="hello" component={hello}/>
            <Redirect from='*' to='/'/>
        </App>
    </HashRouter>
);

export default RouteConfig;