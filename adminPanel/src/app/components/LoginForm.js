import React, { Component, Fragment } from "react";
import { loginService } from "../../service/LoginService";
import "./css/login.css";

class LoginForm extends Component {
    constructor() {
        super();
        this.state = {
            inputUsername: "",
            inputPassword: "",
            log: ((localStorage.getItem("login")) ? true : false),
            logFailed: false
        };
    }
    getInputUsername = (e) => {
        const inputValue = e.target.value;

        this.setState({
            inputUsername: inputValue
        });
    }
    getInputPassword = (e) => {
        const inputValue = e.target.value;

        this.setState({
            inputPassword: inputValue
        });
    }

    clearInputFields = () => {
        this.setState({
            inputUsername: "",
            inputPassword: "",
        });
    }

    signIn = () => {
        const { inputUsername, inputPassword } = this.state;
        if (!inputUsername && !inputPassword) {
            return console.log("Input is empty!");
        };

        const userData = {
            username: inputUsername,
            password: inputPassword
        };


        new Promise((resolve) => {
            resolve(loginService.login(userData));
        })
            .then(() => {
                if (!(loginService.isUserLoggedIn())) {
                    this.setState({ logFailed: true });
                    return console.log("Failed login");
                }
                this.clearInputFields();
                this.setState({ log: true, logFailed: false });
                this.props.history.push("/");
                return console.log("You are in!");
            })
    };

    signOut = () => {
        loginService.logOut();
        this.setState({ log: false })
        this.clearInputFields();
    };


    componentDidMount() { }

    render() {
        const { inputUsername, inputPassword, log, logFailed } = this.state;
        return (
            <Fragment>
                <div className="container">
                    username: <input type="text" id="username" value={inputUsername} onInput={this.getInputUsername} />
                    password: <input type="password" id="password" value={inputPassword} onInput={this.getInputPassword} />
                    <div className="button-holder">
                        {(!inputUsername && !inputPassword) || (log)
                            ? <button disabled onClick={this.signIn}>IN </button>
                            : <button onClick={this.signIn}>IN </button>}
                        {(!log)
                            ? <Fragment>
                                <button disabled onClick={this.signOut} >OUT </button>
                                <p className="not-log-message">Not Logged In!</p>
                            </Fragment>
                            : <Fragment>
                                <button onClick={this.signOut} >OUT </button>
                                <p className="is-log-message">Logged In!</p>
                            </Fragment>
                        }
                    </div>
                    {(logFailed) ? <p>Wrong username or password</p> : ""}
                </div>
            </Fragment>
        )
    }
}

export { LoginForm };