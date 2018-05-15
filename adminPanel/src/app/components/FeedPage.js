import React, { Component, Fragment } from "react";
import { loginService } from "../../service/LoginService";
import "./css/feedPage.css";
import { Header } from "./partials/Header";
import { Search } from "./partials/Search";
import { fetchData } from "../../service/fetchService";
import { Report } from "../../entities/Report";
import { ReportList } from "./ReportList";

class FeedPage extends Component {
    constructor() {
        super();
        this.state = {
            reportList: [],
            searchValue: ""
        };
    };

    logOutHandler = () => {
        loginService.logOut();
        this.props.history.push("/login");
    };

    getSearchInputValue = (searchValue) => {
        this.setState({
            searchValue
        });
    };

    searchReportList = () => {
        const { reportList, searchValue } = this.state;
        return reportList.filter(report => {
            return report.candidateName.toLowerCase().includes(searchValue.trim().toLowerCase())
                || report.companyName.toLowerCase().includes(searchValue.trim().toLowerCase());
        })
    }

    componentDidMount() {
        const path = "reports";

        fetchData(path)
            .then(reportListData => reportListData.map(reportData => {
                return new Report(reportData);
            }))
            .then(reportList => this.setState({ reportList }))
            .catch(error => { return `Sorry, ${error.name} happened!` })
    };

    render() {
        return (
            <Fragment>
                <Header routeData={this.props} />
                <Search getSearchInputValue={this.getSearchInputValue} />
                <ReportList reportList={this.searchReportList()} />
                <div className="button-logOut" onClick={this.logOutHandler}><span role="img" aria-label="x"> X</span></div>
            </Fragment>
        );
    };
};


export { FeedPage };