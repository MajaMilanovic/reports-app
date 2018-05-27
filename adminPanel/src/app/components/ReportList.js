import React from "react";
import { ReportCard } from "./ReportCard";
import "./css/reportList.css";

const ReportList = (props) => {
    const { reportList } = props;
    return (
        <div className="container">
            {(reportList.length === 0)
                ? <div className="errorOnSearch-div">
                    "Sorry, there are no available reports at the moment. Please, try another search. Thank you."</div>
                : reportList.reverse().map(report => {
                    return <ReportCard report={report} key={report.id} />
                })
            }
        </div>
    );
};

export { ReportList };