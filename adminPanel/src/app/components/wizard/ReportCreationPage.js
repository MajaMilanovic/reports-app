import React, { Component, Fragment } from "react";
import { Header } from "../partials/Header";
import "../css/reportCreationPage.css";
import { CreateReportMenu } from "./CreateReportMenu";
import { CreateReportCandidateSelection } from "./CreateReportCandidateSelection";
import { CreateReportCompanySelection } from "./CreateReportCompanySelection";
import { CreateReportFillDetails } from "./CreateReportFillDetails";
import { helpers } from "../../../helpers";

class ReportCreationPage extends Component {
    constructor() {
        super();
    }

    getCandidateCompanyData = () => {
        const { pathname } = this.props.location;

        const candidate = helpers.getDataFromDetailsPathname(pathname).candidateName;
        const company = helpers.getDataFromDetailsPathname(pathname).companyName;
        const companyId = helpers.getDataFromDetailsPathname(pathname).companyId;
        const candidateId = helpers.getDataFromDetailsPathname(pathname).candidateId;

        return {
            "candidateId": candidateId,
            "candidateName": candidate,
            "companyId": companyId,
            "companyName": company,
        }
    }

    render() {
        return (
            <Fragment>
                <Header routeData={this.props} />
                <div className="create-report-wrapper">
                    <div className="container">
                        <CreateReportMenu pathname={this.props.location.pathname} />
                        {(this.props.location.pathname.indexOf("candidates") !== (-1))
                            ? < CreateReportCandidateSelection />
                            : ""}
                        {(this.props.location.pathname.indexOf("companies") !== (-1))
                            ? < CreateReportCompanySelection pathname={this.props.location.pathname} />
                            : ""}
                        {(this.props.location.pathname.indexOf("/details/") !== (-1))
                            ? <CreateReportFillDetails
                                pathname={this.props.location.pathname}
                                getData={this.getCandidateCompanyData} />
                            : ""}
                    </div>
                </div>
            </Fragment>
        )
    }
}


export { ReportCreationPage };