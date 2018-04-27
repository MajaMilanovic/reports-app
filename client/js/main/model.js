"use strict"

var model = (function () {
    var url = {
        candidates: "http://localhost:3333/api/candidates"
    }

    function Candidate(person) {
        this.id = person.id;
        this.name = person.name;
        this.birthday = person.birthday;
        this.email = person.email;
        this.education = person.education;
        this.avatar = person.avatar;
    }

    function makeCandidateEntities(list) {
        var entitiesList = [];
        list.forEach(function (candidate, index) {
            entitiesList[index] = new Candidate(candidate);
        });
        return entitiesList;
    }

    function setCandidateListToLocalStorage(list) {
        list.forEach(function (candidate) {
            var name = candidate.name;
            var content = JSON.stringify(candidate);
            localStorage.setItem(name, content);
        })
    }

    return {
        candidate: Candidate,
        url: url,
        makeCandidateEntities: makeCandidateEntities,
        setCandidateListToLocalStorage: setCandidateListToLocalStorage
    }
})();