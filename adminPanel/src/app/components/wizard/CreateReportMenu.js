import React, { Component, Fragment } from "react";
import { helpers } from "../../../helpers";

class CreateReportMenu extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { pathname, getSelectedCandidateName } = this.props;

        return (
            <ul className="create-report-menu">
                {(pathname === "/candidates/1")
                    ? <li className="create-report-menu-item-active">
                        <div className="number-circle"><p>1</p></div>
                        <p className="create-report-menu-title">Select Candidate</p>
                    </li>
                    : <li className="create-report-menu-item">
                        <div className="number-circle"><p>1</p></div>
                        <p className="create-report-menu-title">Select Candidate</p>
                    </li>}
                {(pathname.indexOf("companies") !== (-1))
                    ? <li className="create-report-menu-item-active">
                        <div className="number-circle"><p>2</p></div>
                        <p className="create-report-menu-title">Select Company</p>
                    </li>
                    : <li className="create-report-menu-item">
                        <div className="number-circle"><p>2</p></div>
                        <p className="create-report-menu-title">Select Company</p>
                    </li>}
                {(pathname.indexOf("details") !== (-1))
                    ? <li className="create-report-menu-item-active">
                        <div className="number-circle"><p>3</p></div>
                        <p className="create-report-menu-title">Fill Report Details</p>
                    </li>
                    : <li className="create-report-menu-item">
                        <div className="number-circle"><p>3</p></div>
                        <p className="create-report-menu-title">Fill Report Details</p>
                    </li>}
                {
                    (pathname.indexOf("companies") !== (-1))
                        ? <li className="create-report-menu-selected-item">
                            <hr className="create-report-menu-hr" />
                            <p className="report-name-description">Candidate : </p>
                            {helpers.getDataFromCompaniesPathname(pathname).name}</li>
                        : ""
                }
                {
                    (pathname.indexOf("details") !== (-1))
                        ? <Fragment>
                            <li className="create-report-menu-selected-item">
                                <hr className="create-report-menu-hr" />
                                <p className="report-name-description">Candidate : </p>
                                {helpers.getDataFromDetailsPathname(pathname).candidateName}</li>
                            <li className="create-report-menu-selected-item">
                                <hr className="create-report-menu-hr" />
                                <p className="report-name-description">Company : </p>
                                {helpers.getDataFromDetailsPathname(pathname).companyName}</li>
                        </Fragment>
                        : ""
                }
            </ul>
        );
    };
};
export { CreateReportMenu };