class Helpers {
    getDataFromDetailsPathname = (str) => {
        const baseString1 = str.slice("/details/".length);
        const slashIndex = baseString1.indexOf("/");
        const candidateId = baseString1.slice(0, slashIndex);


        const baseString2 = baseString1.slice(slashIndex + 1);
        const slashIndex2 = baseString2.indexOf("/");
        const candidateName = baseString2.slice(0, slashIndex2);

        const baseString3 = baseString2.slice(slashIndex2 + 1);
        const slashIndex3 = baseString3.indexOf("/");
        const companyName = baseString3.slice(0, slashIndex3);

        const companyId = baseString3.slice(slashIndex3 + 1);

        return {
            companyName,
            candidateName,
            companyId,
            candidateId
        };
    };

    getDataFromCompaniesPathname = (str) => {
        const baseString = str.slice("/companies/".length);

        const temp = [];

        for (let i = 0; i < baseString.length; i++) {
            if (typeof parseInt(baseString[i]) === "number" && (parseInt(baseString[i]) === parseInt(baseString[i]))) {
                temp.push(baseString.indexOf(baseString[i]));
            }
        }

        temp.sort((a, b) => {
            return b - a;
        })

        const end = temp[0];

        const slashIndex = baseString.indexOf("/");
        const name = baseString.slice(slashIndex + 1);

        const id = baseString.slice(0, end);

        return {
            name,
            id
        };
    };
};


export const helpers = new Helpers();