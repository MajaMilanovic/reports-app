import React, { Component, Fragment } from "react";
import { Header } from "../partials/Header";
import "../css/reportCreationPage.css";
import { CreateReportMenu } from "./CreateReportMenu";
import { CreateReportCandidateSelection } from "./CreateReportCandidateSelection";
import { CreateReportCompanySelection } from "./CreateReportCompanySelection";
import { SelectedCandidate } from "./SelectedCandidate";

class ReportCreationPage extends Component {
    constructor() {
        super();
        this.state = {
            selectedCompanyName: ""
        }
    }

    getSelectedCompanyName = (name) => {
        this.setState({
            selectedCompanyName: name
        })
    }

    render() {
        return (
            <Fragment>
                <Header routeData={this.props} />
                <div className="create-report-wrapper">
                    <div className="container">
                        {(this.props.location.pathname.indexOf("/reports/candidates/") !== (-1))
                            ? <Fragment>
                                <CreateReportMenu pathname={this.props.location.pathname} />
                                < CreateReportCandidateSelection />
                            </Fragment>
                            : ""}
                        {(this.props.location.pathname.indexOf("/reports/companies/") !== (-1))
                            ? <Fragment>
                                <CreateReportMenu pathname={this.props.location.pathname} />
                                < CreateReportCompanySelection getSelectedCompanyName={this.getSelectedCompanyName} />
                            </Fragment>
                            : ""}
                    </div>
                </div>
            </Fragment>
        )
    }
}


export { ReportCreationPage };