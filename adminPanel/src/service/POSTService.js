export const sendInterviewReport = (data) => {
    const url = "http://localhost:3333/api/reports";

    return fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            "candidateId": data.candidateId,
            "candidateName": data.candidateName,
            "companyId": data.companyId,
            "companyName": data.companyName,
            "interviewDate": data.interviewDate,
            "phase": data.phase,
            "status": data.status,
            "note": data.note
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
};