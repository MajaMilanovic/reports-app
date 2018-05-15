import React, { Component, Fragment } from "react";
import { Search } from "../partials/Search";
import { fetchData } from "../../../service/fetchService";
import { Company } from "../../../entities/Company";
import { Link } from "react-router-dom";


class CreateReportCompanySelection extends Component {
    constructor() {
        super();
        this.state = {
            searchValue: "",
            companyList: [],
            selectedCompanyName: ""
        };
    };

    getSearchInputValue = (searchValue) => {
        this.setState({
            searchValue
        });
    }

    componentDidMount() {
        const path = "companies";
        fetchData(path)
            .then(list => list.map(company => {
                return new Company(company)
            }))
            .then(companyList => {
                this.setState({
                    companyList
                })
            })
    }

    selectCompany = (e) => {
        const { getSelectedCompanyName } = this.props;
        const name = e.target.id;
        this.setState({
            selectedCompanyName: name
        });
        getSelectedCompanyName(name);
    };


    render() {
        const { companyList, searchValue, selectedCompanyName } = this.state;

        return (
            <div className="create-report-candidateList-container">
                <div className="create-report-search-holder"><Search getSearchInputValue={this.getSearchInputValue} /></div>
                <div className="create-report-company-list-holder">
                    <ul className="create-report-company-list">
                        {
                            (!companyList) ? "Loading..."
                                : companyList.filter(company => {
                                    return company.name.toLowerCase().includes(searchValue.trim().toLowerCase())
                                }).map(company => {
                                    return <li key={company.id} id={company.name}
                                        onClick={this.selectCompany}
                                        className={(selectedCompanyName === company.name) ? "company-selected" : ""}
                                    >{company.name}</li>
                                })
                        }
                    </ul>
                </div>
                <div className="select-company-button-holder">
                    {(!selectedCompanyName)
                        ? <Fragment>
                            <p className="next-link"><Link to="/reports/candidates/1">Back</Link></p> <p className="next-link-disabled">Next</p>
                        </Fragment>
                        : <Fragment>
                            <p className="next-link"><Link to="/reports/candidates/1">Back</Link></p> <p className="next-link">Next</p>
                        </Fragment>}
                </div>

            </div>
        );
    };
};

export { CreateReportCompanySelection };