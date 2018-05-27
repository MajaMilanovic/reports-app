import React, { Component, Fragment } from "react";
import ButtonNavigation from "./ButtonNavigation";

class CreateReportFillDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: "",
            phase: "",
            Status: "",
            notes: ""
        }
    }

    getTextAreaValue = (e) => {
        this.setState({
            notes: e.target.value
        })

    }

    render() {
        const { selectedCandidateName } = this.props;
        return (
            <div className="fill-details-holder">
                <div className="fill-details-inputs">
                    <div className="input-holder">
                        <p className="report-name-description" >Interview date : </p>
                        <input type="date" className="input-fields" />
                    </div>
                    <div className="input-holder">
                        <p className="report-name-description" >Phase : </p>
                        <select className="input-fields">
                            <option value="hr">HR</option>
                            <option value="cv">CV</option>
                            <option value="tech">Technical</option>
                        </select>
                    </div>
                    <div className="input-holder">
                        <p className="report-name-description" >Status : </p>
                        <select className="input-fields" required >
                            <option value="selected">Selected</option>
                            <option value="denied">Denied</option>
                        </select>
                    </div>
                </div>
                <div className="textarea-holder">
                    <p className="report-name-description">Notes : </p>
                    <textarea name="notes" cols="80" rows="10" value={this.state.notes} onChange={this.getTextAreaValue}></textarea>
                </div>
                <ButtonNavigation selectedCandidateName={selectedCandidateName} />
            </div>
        )
    }
}


export { CreateReportFillDetails };