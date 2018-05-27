import React, { Component, Fragment } from "react";
import ButtonNavigation from "./ButtonNavigation";

class CreateReportFillDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: "",
            phase: "",
            status: "",
            notes: ""
        }
    }

    getTextAreaValue = (e) => {
        this.setState({
            notes: e.target.value
        })
    }

    getInputDateValue = (e) => {
        const date = e.target.value;
        this.setState({
            date
        })
    }

    getDropdownPhaseValue = (e) => {
        const phase = e.target.value;
        this.setState({
            phase
        })
    }
    getDropdownStatusValue = (e) => {
        const status = e.target.value;
        this.setState({
            status
        })
    }

    getInterviewData = () => {
        const data = this.props.getData();
        const { date, status, phase, notes } = this.state;
        data.interviewDate = date;
        data.phase = phase;
        data.status = status;
        data.note = notes;
        return data;
    }

    render() {
        const { pathname, getData } = this.props;

        return (
            <div className="fill-details-holder">
                <div className="fill-details-inputs">
                    <div className="input-holder">
                        <p className="report-name-description" >Interview date : </p>
                        <input type="date" className="input-fields" onChange={this.getInputDateValue} />
                    </div>
                    <div className="input-holder">
                        <p className="report-name-description" >Phase : </p>
                        <select className="input-fields" onChange={this.getDropdownPhaseValue}>
                            <option value="">select phase</option>
                            <option value="hr">HR</option>
                            <option value="cv">CV</option>
                            <option value="technical">Technical</option>
                        </select>
                    </div>
                    <div className="input-holder">
                        <p className="report-name-description" >Status : </p>
                        <select className="input-fields" required onChange={this.getDropdownStatusValue}>
                            <option value="">select status</option>
                            <option value="selected">Selected</option>
                            <option value="denied">Denied</option>
                        </select>
                    </div>
                </div>
                <div className="textarea-holder">
                    <p className="report-name-description">Notes : </p>
                    <textarea name="notes" cols="80" rows="10" value={this.state.notes} onChange={this.getTextAreaValue}></textarea>
                </div>
                <ButtonNavigation getData={this.getInterviewData} pathname={pathname} />
            </div>
        )
    }
}


export { CreateReportFillDetails };