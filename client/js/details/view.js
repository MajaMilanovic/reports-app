var view = (function () {
    var $DOM_Elements = {
        tableCandidateData: {
            name: $("#table-data-candidate-name"),
            dob: $("#table-data-candidate-dob"),
            email: $("#table-data-candidate-email"),
            education: $("#table-data-candidate-education"),
        },
        imageCandidate: $("#img-candidate"),
        tableInterviewDetails: $(".table-interview-details")
    };

    function displayCandidateData(data) {
        $DOM_Elements.tableCandidateData.name.text(data.name);

        $DOM_Elements.tableCandidateData.dob.text(formatDate(data.birthday));

        $DOM_Elements.tableCandidateData.email.text(data.email);

        $DOM_Elements.tableCandidateData.education.text(data.education);
    };

    function formatDate(inputDate) {
        var myDate = new Date(inputDate);
        var day = myDate.getDate();
        var month = myDate.getMonth() + 1;
        var year = myDate.getFullYear();

        return day + "." + month + "." + year + ".";
    }

    function displayCandidateImage(candidate) {
        var $candidateImg = $DOM_Elements.imageCandidate;
        if (candidate.avatar === "") {
            $candidateImg.attr("src", "http://hyph.me/cms/wp-content/themes/hyph/assets/images/team/placeholder.jpg");
        } else {
            $candidateImg.attr("src", candidate.avatar);
        }
    };

    function displayCandidateReport(reportList) {

        reportList.forEach(function (report) {
            var $company = $("<td>").addClass("table-data-company");
            $company.text(report.companyName);

            var $interviewDate = $("<td>").addClass("table-data-interview-date");

            if (!parseInt(report.interviewDate)) {
                $interviewDate.text(report.interviewDate);
            } else {
                $interviewDate.text(report.interviewDate());
            }

            var $interviewStatus = $("<td>").addClass("table-data-interview-status");
            $interviewStatus.text(report.status);

            var $interviewContent = $("<tr>").addClass("table-interview-details-content");

            $interviewContent.append($company);
            $interviewContent.append($interviewDate);
            $interviewContent.append($interviewStatus);

            var $modalHolder = $("<td>").addClass("modal-btn-holder");
            var $buttonModal = $("<button>");
            $buttonModal.addClass("button-open-modal");
            $buttonModal.attr("name", report.id);

            var $buttonImg = $("<img>").attr("src", "https://png.pngtree.com/element_pic/17/09/29/06d15012511c08810906bf207e3b2c14.jpg");
            $buttonImg.css({
                "width": "20px",
                "height": "20px"
            });

            $buttonModal.append($buttonImg);

            $modalHolder.append($buttonModal);
            $interviewContent.append($modalHolder);

            $DOM_Elements.tableInterviewDetails.append($interviewContent);

            createModal(report);
        })

    };

    function createModal(data) {
        var $modal = $("<div>");
        $modal.addClass("modal");
        $modal.addClass("hidden");
        $modal.attr("id", data.id);

        var $modalMessage = $("<div>");
        $modalMessage.addClass("modal-message");

        var $modalClose = $("<span>");
        $modalClose.text("X");
        $modalClose.addClass("close");

        var $modalContent = $("<div>").addClass("modal-title");
        $modalContent.text(data.candidateName);
        $modalContent.append($("<hr>").addClass("modal-hr"));

        var $modalInterviewDetails = $("<dl>").addClass("modal-details");

        var $company = $("<dt>").text("Company");
        $modalInterviewDetails.append($company);

        var $companyName = $("<dd>").text(data.companyName);
        $modalInterviewDetails.append($companyName);

        var $date = $("<dt>").text("Interview Date");
        $modalInterviewDetails.append($date);

        var $interviewDate = $("<dd>").text(data.interviewDate());
        $modalInterviewDetails.append($interviewDate);

        var $phase = $("<dt>").text("Phase");
        $modalInterviewDetails.append($phase);

        var $interviewPhase = $("<dd>").text(capitalizeFirstLetter(data.phase));
        $modalInterviewDetails.append($interviewPhase);

        var $status = $("<dt>").text("Status");
        $modalInterviewDetails.append($status);

        var $interviewStatus = $("<dd>").text(capitalizeFirstLetter(data.status));
        $modalInterviewDetails.append($interviewStatus);

        var $modalNotes = $("<div>").addClass("modal-notes");
        var $notesTitle = $("<p>").text("Notes").addClass("modal-notes-title");
        $modalNotes.append($notesTitle);
        var $notesContent = $("<p>").text(data.note).addClass("modal-notes-content");
        $modalNotes.append($notesContent);

        $modalContent.append($modalInterviewDetails);
        $modalContent.append($modalNotes);

        $modalMessage.append($modalClose);
        $modalMessage.append($modalContent);
        $modal.append($modalMessage);
        $("body").append($modal);
    };

    function capitalizeFirstLetter(word) {
        return (word[0]).toUpperCase() + word.slice(1);
    }

    return {
        displayCandidateData: displayCandidateData,
        displayCandidateImage: displayCandidateImage,
        displayCandidateReport: displayCandidateReport,
        createModal: createModal
    }

})();