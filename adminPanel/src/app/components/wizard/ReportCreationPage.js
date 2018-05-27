import React, { Component, Fragment } from "react";
import { Header } from "../partials/Header";
import "../css/reportCreationPage.css";
import { CreateReportMenu } from "./CreateReportMenu";
import { CreateReportCandidateSelection } from "./CreateReportCandidateSelection";
import { CreateReportCompanySelection } from "./CreateReportCompanySelection";
import { CreateReportFillDetails } from "./CreateReportFillDetails";

class ReportCreationPage extends Component {
    constructor() {
        super();
        this.state = {
            selectedCompanyName: "",
            selectedCandidateName: ""
        }
    }

    getSelectedCompanyName = (name) => {
        this.setState({
            selectedCompanyName: name
        })
    }
    getSelectedCandidateName = (candidateName) => {
        const selectedCandidateName = candidateName;
        this.setState({ selectedCandidateName });
    }

    render() {
        return (
            <Fragment>
                <Header routeData={this.props} />
                <div className="create-report-wrapper">
                    <div className="container">
                        <CreateReportMenu pathname={this.props.location.pathname} getSelectedCandidateName={this.getSelectedCandidateName} />
                        {(this.props.location.pathname.indexOf("/reports/candidates/") !== (-1))
                            ? < CreateReportCandidateSelection />
                            : ""}
                        {(this.props.location.pathname.indexOf("/reports/companies/") !== (-1))
                            ? < CreateReportCompanySelection getSelectedCompanyName={this.getSelectedCompanyName} pathname={this.props.location.pathname} />
                            : ""}
                        {(this.props.location.pathname.indexOf("/reports/3") !== (-1))
                            ? <CreateReportFillDetails selectedCandidateName={this.state.selectedCandidateName} />
                            : ""}
                    </div>
                </div>
            </Fragment>
        )
    }
}


export { ReportCreationPage };