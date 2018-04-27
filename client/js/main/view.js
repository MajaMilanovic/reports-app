"use strict"

var view = (function () {
    const DOM_elements = {
        inputSearchElement: document.querySelector("#search-candidates"),
        linkListToDetailsPage : document.querySelectorAll(".card-content-name")
    }

    function displayCandidateCard(candidate) {
        var cardWrapper = document.createElement("div");
        cardWrapper.classList.add("card-wrapper");
        cardWrapper.setAttribute("id", candidate.id);

        var card = document.createElement("div");
        card.classList.add("card");


        var cardImage = document.createElement("img");
        if (candidate.avatar === "") {
            cardImage.setAttribute("src", "http://hyph.me/cms/wp-content/themes/hyph/assets/images/team/placeholder.jpg");
        } else {
            cardImage.setAttribute("src", candidate.avatar);
        }
        cardImage.setAttribute("alt", candidate.name);
        cardImage.classList.add("card-img");


        var cardContent = document.createElement("div");
        cardContent.classList.add("card-content");

        var cardContentName = document.createElement("p");
        cardContentName.classList.add("card-content-name");
        cardContentName.textContent = candidate.name;

        var cardContentEmail = document.createElement("p");
        cardContentEmail.classList.add("card-content-email");
        cardContentEmail.textContent = candidate.email;

        cardWrapper.appendChild(card);
        card.appendChild(cardImage);
        cardContent.appendChild(cardContentName);
        cardContent.appendChild(cardContentEmail);
        card.appendChild(cardContent);
        document.querySelector("main").appendChild(cardWrapper);

    }

    function displayCandidateList(list) {
        list.forEach(displayCandidateCard)
    }

    function displayError() {
        var banner = document.createElement("img");
        banner.classList.add("banner");
        banner.setAttribute("src", "https://www.webpagefx.com/blog/images/assets/images.sixrevisions.com/2010/05/26-12_error_page_twurn.jpg");

        var errorDiv = document.createElement("div");
        errorDiv.classList.add("errorDiv");

        var message = document.createElement("p");
        message.textContent = "Sorry, error happened. Please try refreshing the page.";

        errorDiv.appendChild(message);
        errorDiv.appendChild(banner);
        document.querySelector("main").appendChild(errorDiv);
    }

    return {
        DOM_elements: DOM_elements,
        displayCandidateCard: displayCandidateCard,
        displayCandidateList: displayCandidateList,
        displayError: displayError
    }
})();