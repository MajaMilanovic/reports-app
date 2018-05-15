import React from "react";

const SelectedCandidate = ({ name }) => {
    return (
        <div className="selected-candidate-name">
            <hr />
            {name}
        </div>
    );
};

export { SelectedCandidate };