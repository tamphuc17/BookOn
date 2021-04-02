import React, { Component } from "react";
//import { Container, AppBar, Typography } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/login/login";
import Home from "./Home/home";

export default class App extends Component {
    render() {
        return (
            <div className="app">
                <BrowserRouter>
                    <Switch>
                        <Route exact path={"/"} component={Login}/>
                        <Route exact path={"/home"} component={Home}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}
