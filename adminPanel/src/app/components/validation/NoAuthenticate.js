import React, { Component } from "react";
import { loginService } from "../../../service/LoginService";

export default ComponentComposed =>
    class Authenticate extends Component {
        componentDidMount = () => {
            if (loginService.isUserLoggedIn())
                this.props.history.push("/");
        };

        render() {
            return (
                <ComponentComposed {...this.props} />
            );
        };
    };
