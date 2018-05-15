export const fetchData = (path) => {
    const base_url = "http://localhost:3333/api/";

    return fetch(`${base_url}${path}`)
        .then(res => res.json())
        .then(data => data)
};