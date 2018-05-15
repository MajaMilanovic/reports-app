import React, { Component } from "react";

class CandidateCard extends Component {

    selectCandidate = () => {
        this.props.getSelectedCandidate(this.props.candidate.id);
    };

    render() {
        const { candidate, selected } = this.props;
        return (
            <div className="candidate-card-wrapper" onClick={this.selectCandidate} >
                <div className={(selected) ? "candidate-card-selected" : "candidate-card"}>
                    <div className="candidate-avatar-wrapper">
                        {(!candidate.avatar)
                            ? <img src="http://hyph.me/cms/wp-content/themes/hyph/assets/images/team/placeholder.jpg" alt="avatar" />
                            : <img src={candidate.avatar} alt="avatar" />}
                    </div>
                    <div className="candidate-card-content">
                        <p>{candidate.name}</p>
                        <p>{candidate.email}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export { CandidateCard };