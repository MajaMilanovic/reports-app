"use strict"

var controller = (function (data, ui) {

    var candidateList = [];

    function fetchCandidateList(url) {
        var request = new XMLHttpRequest();
        request.open("GET", url, true);
        request.onload = function (response) {
            if (request.status >= 200 && request.status < 400) {
                var candidateResponseList = JSON.parse(request.responseText);
                var candidateInstancesList = data.makeCandidateEntities(candidateResponseList);
                candidateList = candidateInstancesList;
                ui.displayCandidateList(candidateList);
            }
        };
        request.onerror = function () {
            ui.displayError();
        }

        request.send();
    }

    function onInputSearch(e) {
        var inputSearchValue = e.target.value;
        var inputSearchValueCaseInsensitive = inputSearchValue.toLowerCase().trim();

        candidateList.forEach(function (candidate) {
            var id = candidate.id;
            var card = document.getElementById(id);
            var name = candidate.name.toLowerCase();
            if ((name.indexOf(inputSearchValueCaseInsensitive)) === -1) {
                card.classList.add("hidden");
            } else {
                card.classList.remove("hidden");
            }
        })
    }

    function registerEvents() {
        fetchCandidateList(data.url.candidates);

        var inputSearch = ui.DOM_elements.inputSearchElement;
        inputSearch.addEventListener("input", onInputSearch);
    }

    return {
        init: function () {
            registerEvents();
        }
    }

})(model, view);

controller.init();