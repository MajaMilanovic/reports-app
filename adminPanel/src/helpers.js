class Helpers {
    getCandidateNameFromString = (str) => {
        const namesString = str.slice("/reports/3/".length);
        const slashIndex = namesString.indexOf("/");
        const companyName = namesString.slice(slashIndex + 1);
        const candidateName = namesString.slice(0, slashIndex);
        return {
            companyName,
            candidateName
        };
    };
};


export const helpers = new Helpers();