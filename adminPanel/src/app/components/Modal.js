import React from "react";

const Modal = ({ data }) => {
    return (
        <div className="modal" name={data.report.id}>
            <div className="modal-message">
                <span className="close-modal" onClick={data.handler}>X</span>
                <div className="modal-title">{data.report.candidateName}</div>
                <hr className="modal-hr" />
                <dl className="modal-details">
                    <dt> Company</dt>
                    <dd>{data.report.companyName}</dd>
                    <dt>Interview Date</dt>
                    <dd>{data.report.formatInterviewDate()}</dd>
                    <dt>Phase</dt>
                    <dd>{data.report.phase[0].toUpperCase() + data.report.phase.slice(1)}</dd>
                    <dt>Status</dt>
                    <dd>{data.report.status[0].toUpperCase() + data.report.status.slice(1)}</dd>
                </dl>
                <div className="modal-notes">
                    <p className="modal-notes-title">Notes</p>
                    <p className="modal-notes-content">{data.report.note}</p>
                </div>
            </div>
        </div>
    );
};

export { Modal };