import React from "react";

const CreateReportMenu = (props) => {
    const { pathname } = props;
    return (
        <ul className="create-report-menu">
            {(pathname === "/reports/candidates/1")
                ? <li className="create-report-menu-item-active">
                    <div className="number-circle"><p>1</p></div>
                    <p className="create-report-menu-title">Select Candidate</p>
                </li>
                : <li className="create-report-menu-item">
                    <div className="number-circle"><p>1</p></div>
                    <p className="create-report-menu-title">Select Candidate</p>
                </li>}
            {(pathname.indexOf("companies") !== (-1))
                ? <li className="create-report-menu-item-active">
                    <div className="number-circle"><p>2</p></div>
                    <p className="create-report-menu-title">Select Company</p>
                </li>
                : <li className="create-report-menu-item">
                    <div className="number-circle"><p>2</p></div>
                    <p className="create-report-menu-title">Select Company</p>
                </li>}
            <li className="create-report-menu-item">
                <div className="number-circle"><p>3</p></div>
                <p className="create-report-menu-title">Fill Report Details</p>
            </li>
            {
                (pathname.indexOf("companies") !== (-1))
                    ? <li className="create-report-menu-selected-item">
                        <hr className="create-report-menu-hr"/>
                        <p className="report-name-description">Candidate : </p>
                        {pathname.slice(19)}</li>
                    : ""
            }
            <li></li>
            <li></li>
        </ul>
    );
};
export { CreateReportMenu };