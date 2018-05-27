import React, { Component, Fragment } from "react";
import "./css/reportCard.css";
import { Modal } from "./Modal.js";

class ReportCard extends Component {
    constructor() {
        super();
        this.state = {
            modal: false,
            deleted: false
        }
    }

    openModal = () => {
        this.setState({
            modal: true
        })
    }

    closeModal = () => {
        this.setState({
            modal: false
        })
    }
    deleteReport = (e) => {
        this.setState({
            deleted: true
        })
    }

    render() {
        const { report } = this.props;
        const handler = this.closeModal;
        const data = {
            report,
            handler
        };

        return (
            <Fragment>
                {(this.state.deleted)
                    ? ""
                    : <div className="report-card-wrapper-div">
                        <div className="report-card-content-div">
                            <div className="report-name-div">
                                <p>{report.companyName}</p>
                                <p className="report-name-description">Company</p>
                            </div>
                            <div className="report-name-div">
                                <p>{report.candidateName}</p>
                                <p className="report-name-description">Candidate</p>
                            </div>
                            <div className="report-date-div">
                                <p>{report.formatInterviewDate()}</p>
                                <p className="report-name-description">Interview date</p>
                            </div>
                            <div className="report-status-div">
                                <p>{report.status}</p>
                                <p className="report-name-description">Status</p>
                            </div>
                            <div className="img-open-modal" onClick={this.openModal}>
                                <img src="https://png.pngtree.com/element_pic/17/09/29/06d15012511c08810906bf207e3b2c14.jpg" alt="open modal" />
                            </div>
                            {(this.state.modal)
                                ? <Modal data={data} />
                                : ""
                            }
                            <div className="delete-btn-holder">
                                <div className="delete-btn-content" onClick={this.deleteReport}>
                                    <p>X</p>
                                </div>
                            </div>
                        </div>
                    </div>}
            </Fragment>
        );
    };
};
export { ReportCard };