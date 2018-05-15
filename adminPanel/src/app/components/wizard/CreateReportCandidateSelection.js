import React, { Component } from "react";
import { Search } from "../partials/Search";
import { CandidateCard } from "./CandidateCard";
import { fetchData } from "../../../service/fetchService";
import { Candidate } from "../../../entities/Candidate";
import { Link } from "react-router-dom";

class CreateReportCandidateSelection extends Component {
    constructor() {
        super();
        this.state = {
            searchValue: "",
            candidateList: [],
            candidateID: "",
            candidateName: ""
        }
    }


    getSearchInputValue = (searchValue) => {
        this.setState({
            searchValue
        });
    };

    getSelectedCandidate = (id) => {
        this.setState({
            candidateID: id
        });
    }


    getCandidateNameFromList = () => {
        const { candidateID, candidateList } = this.state;
        let name = "";
        candidateList.forEach(candidate => {
            if (candidate.id === candidateID) {
                name = candidate.name;
            };
        });
        return name;
    }

    componentDidMount() {
        const path = "candidates";
        fetchData(path)
            .then(candidateListData =>
                candidateListData.map(candidateData => {
                    return new Candidate(candidateData);
                }))
            .then(candidateList => this.setState({ candidateList }))
            .catch(error => { return `Sorry, ${error.name} happened!` })
    }


    render() {
        const { candidateList, searchValue, candidateID } = this.state;
        return (
            <div className="create-report-candidateList-container">
                <div className="create-report-search-holder"><Search getSearchInputValue={this.getSearchInputValue} /></div>
                <div className="candidate-list-holder">
                    {(!candidateList)
                        ? "Loading..."
                        : (candidateList.filter(candidate => {
                            return candidate.name.toLowerCase().includes(searchValue.trim().toLowerCase())
                        }).map(candidate => {
                            return < CandidateCard candidate={candidate}
                                key={candidate.id}
                                getSelectedCandidate={this.getSelectedCandidate}
                                selected={(candidateID === candidate.id) ? true : false} />
                        }))}
                </div>
                {(!this.state.candidateID)
                    ? <p id="next-page-link" className="next-link-disabled">Next</p>
                    : <Link to={`/reports/companies/${this.getCandidateNameFromList()}`} id="next-page-link" className="next-link">Next</Link>}
            </div>
        );
    };
};
export { CreateReportCandidateSelection };