import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { sendInterviewReport } from "../../../service/POSTService";
import { helpers } from "../../../helpers";

const ButtonNavigation = (props) => {
    const { getData, pathname } = props;

    const areFieldsValid = (data) => {
        const values = Object.values(data);
        const filteredValues = values.filter(value => {
            return !value === true;
        })
        if (filteredValues.length === 0) {
            return true;
        }
        else {
            return false;
        }
    }


    const postReport = () => {
        const data = getData();
        (!areFieldsValid(data))
            ? console.log("Nahh")
            : sendInterviewReport(data)
                .then(res => res.json())
                .then(result => {
                    props.history.push("/")
                })
    }



    return (
        <div className="select-company-button-holder">
            <Fragment>
                <p className="next-link">
                    <Link to={`/companies/${helpers.getDataFromDetailsPathname(pathname).candidateId}/${helpers.getDataFromDetailsPathname(pathname).candidateName}`}>Back</Link></p>
                {(!areFieldsValid(getData()))
                    ? <p className="next-link-disabled" onClick={postReport}>Next</p>
                    : <p className="next-link" onClick={postReport}>Next</p>
                }
            </Fragment>
        </div>
    )
}



export default withRouter(ButtonNavigation);