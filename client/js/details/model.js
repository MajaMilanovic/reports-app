var model = (function () {

    var url = {
        reports: "http://localhost:3333/api/reports"
    }

    function Report(report) {
        this.id = report.id;
        this.candidateId = report.candidateId;
        this.candidateName = report.candidateName;
        this.companyId = report.companyId;
        this.companyName = report.companyName;
        this.interviewDate = function () {
            var myDate = new Date(report.interviewDate);
            var day = myDate.getDate();
            var month = myDate.getMonth() + 1;
            var year = myDate.getFullYear();

            return day + "." + month + "." + year + ".";
        };
        this.phase = report.phase;
        this.status = report.status;
        this.note = report.note;
    };


    function makeReportEntities(list) {
        var reportList = [];
        list.forEach(function (report, i) {
            reportList[i] = new Report(report);
        });
        return reportList;
    };

    function getSelectedCandidateID() {
        var selectedCandidate = JSON.parse(localStorage.getItem("selectedCandidate"));
        return selectedCandidate.id;
    }

    function isReportValid(report) {
        var candidateReport;
        var candidateID = getSelectedCandidateID();

        if (report.candidateId === candidateID) {
            return true;
        } else {
            return false;
        }
    }


    return {
        url: url,
        Report: Report,
        makeReportEntities: makeReportEntities,
        getSelectedCandidateID: getSelectedCandidateID,
        isReportValid: isReportValid
    }

})();