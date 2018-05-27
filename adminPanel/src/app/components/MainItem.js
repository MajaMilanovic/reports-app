import React from "react";
import { Switch, Route } from "react-router-dom";
import { LoginForm } from "./LoginForm";
import { FeedPage } from "../components/FeedPage";
import Authenticate from "../components/validation/Authenticate";
import NoAuthenticate from "../components/validation/NoAuthenticate";
import { ReportCreationPage } from "./wizard/ReportCreationPage";

const MainItem = () => {
    return (
            <Switch>
                <Route path="/login" component={NoAuthenticate(LoginForm)} />
                <Route exact path="/candidates/1" component={Authenticate(ReportCreationPage)} />
                <Route exact path="/details/:id/:name/:companyName/:companyId" component={Authenticate(ReportCreationPage)} />
                <Route exact path="/companies/:id/:name/" component={Authenticate(ReportCreationPage)} />
                <Route path="/" component={Authenticate(FeedPage)} />
            </Switch>
    );
};

export { MainItem };