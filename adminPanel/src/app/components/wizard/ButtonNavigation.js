import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

const ButtonNavigation = (props) => {
    const { selectedCandidateName } = props;
    return (
        <div className="select-company-button-holder">
            <Fragment>
                <p className="next-link"><Link to={`/reports/companies/${selectedCandidateName}`}>Back</Link></p> <p className="next-link-disabled">Next</p>
            </Fragment>
        </div>
    )
}



export default withRouter(ButtonNavigation);