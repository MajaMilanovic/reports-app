import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { sendInterviewReport } from "../../../service/POSTService";
import { helpers } from "../../../helpers";

const ButtonNavigation = (props) => {
    const { getData, pathname } = props;

    const postReport = () => {

        const data = getData();
        console.log(data);


        // sendInterviewReport(data)
        //     .then(res => res.json())
        //     .then(result => console.log(result)
        //     )

    }
    return (
        <div className="select-company-button-holder">
            <Fragment>
                <p className="next-link">
                    <Link to={`/companies/${helpers.getDataFromDetailsPathname(pathname).candidateId}/${helpers.getDataFromDetailsPathname(pathname).candidateName}`}>Back</Link></p>
                <p className="next-link-disabled" onClick={postReport}>Next</p>
            </Fragment>
        </div>
    )
}



export default withRouter(ButtonNavigation);