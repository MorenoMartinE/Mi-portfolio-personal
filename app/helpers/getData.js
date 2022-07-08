export default function getData(URL_get){

    return fetch(URL_get).then((res) => res.ok ? 
        res.json() : 
        Promise.reject({ 
            err: true,
            status: res.status || "000",
            statusText: res.statusText || "Error no identificado",
        }))
        .then(json => json)
        .catch((err) => err);

}