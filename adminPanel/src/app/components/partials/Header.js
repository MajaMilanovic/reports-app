import React, { Component } from "react";
import "../css/header.css";
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        const { routeData } = this.props;

        return (
            <header className="main-page-title-bar">
                <div className="container main-page-title-bar">
                    <h3 className="main-page-title">Reports Administration</h3>
                    <div className="main-page-title-div">
                        {(routeData.match.url === "/")
                            ? <Link to="/" className="link-disabled main-page-title-link">Reports</Link>
                            : <Link to="/" className="main-page-title-link">Reports</Link>}
                        {(routeData.match.url.indexOf("/reports")!==(-1))
                            ? <Link to="/reports/candidates/1" className="link-disabled main-page-title-link">Create Report</Link>
                            : <Link to="/reports/candidates/1" className="main-page-title-link">Create Report</Link>}

                    </div>
                </div>
            </header>
        );
    };
};

export { Header };