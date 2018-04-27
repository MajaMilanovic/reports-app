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

            var $buttonModal = $("<td><button>&#128065;</button></td>").addClass("button-open-modal");
            $interviewContent.append($buttonModal);

            $DOM_Elements.tableInterviewDetails.append($interviewContent);
        })

    };

    return {
        displayCandidateData: displayCandidateData,
        displayCandidateImage: displayCandidateImage,
        displayCandidateReport: displayCandidateReport
    }

})();