class Report {
    constructor(report) {
        this.id = report.id;
        this.candidateId = report.candidateId;
        this.candidateName = report.candidateName;
        this.companyId = report.companyId;
        this.companyName = report.companyName;
        this.interviewDate = report.interviewDate;
        this.phase = report.phase;
        this.status = report.status;
        this.note = report.note;
    };

    formatInterviewDate = () => {
        var myDate = new Date(this.interviewDate);
        var day = myDate.getDate();
        var month = myDate.getMonth() + 1;
        var year = myDate.getFullYear();

        return day + "." + month + "." + year + ".";
    };
};

export {
    Report
};