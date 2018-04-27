var controller = (function ($, data, ui) {

    function fetchReportData() {
        var request = $.get(data.url.reports);
        request.done(onRequestDone);
        request.fail(function (jqXHR, responseStatus) {
            alert("Request Failed:" + responseStatus);
        })

    };


    function onRequestDone(response) {
        var candidateReportList = [];

        var reportList = data.makeReportEntities(response);

        reportList.forEach(function (report) {
            if (data.isReportValid(report)) {
                candidateReportList.push(report);
            }
        });
        ui.displayCandidateReport(candidateReportList);
    }


    function getCandidateDataFromLocalStorage() {
        var selectedCandidateData = JSON.parse(localStorage.getItem("selectedCandidate"));
        ui.displayCandidateData(selectedCandidateData);
        ui.displayCandidateImage(selectedCandidateData);

        fetchReportData();
    };


    function registerEvents() {
        getCandidateDataFromLocalStorage();
    }


    return {
        init: function () {
            registerEvents();
        }
    }

})(jQuery, model, view);

controller.init();