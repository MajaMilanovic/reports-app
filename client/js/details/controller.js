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
        setupModal();
    }


    function populateCandidateReportPage() {
        var selectedCandidateData = JSON.parse(localStorage.getItem("selectedCandidate"));
        ui.displayCandidateData(selectedCandidateData);
        ui.displayCandidateImage(selectedCandidateData);

        fetchReportData();
    };

    function setupModal() {
        var $buttonOpenModal = $(".button-open-modal");

        $buttonOpenModal.on("click", function (e) {
            var id = e.target.name;
            var $modalList = $(".modal");
            $modalList.each(function (i, el) {
                if (id === el.id) {
                    onClickOpenModal($(el));
                }
            })
        })

        var $closeModal = $(".close");
        $closeModal.on("click", onClickCloseModal);
    }

    function onClickOpenModal(element) {
        $(element).css("display", "block");
    }

    function onClickCloseModal(e) {
        var parent = e.target.parentElement.parentElement;
        $(parent).css("display", "none");
    }

    function registerEvents() {
        populateCandidateReportPage();
    }


    return {
        init: function () {
            registerEvents();
        }
    }

})(jQuery, model, view);

controller.init();