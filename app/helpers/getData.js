const Urluser = "https://api.github.com/users/MorenoMartinE";
const Urlrepos = "https://api.github.com/users/MorenoMartinE/repos";


export function getUser(){

    return fetch(Urluser)
            .then((res) => res.ok ?
            res.json() :
            Promise.reject({
                err:true,
                status: res.status || "000",
                statusText: res.statusText || "Error no identificado",
            }))
            .then(json => json)
            .catch((err) => err);
}

export function getRepos(){
    return fetch(Urlrepos)
        .then((res) => res.ok ?
        res.json() :
        Promise.reject({
            err:true,
            status: res.status || "000",
            statusText: res.statusText || "Error no identificado",
        }))
        .then(json => json)
        .catch((err) => err);
}

export function getGeneric(URL){
    return fetch(URL)
        .then((res) => res.ok ?
        res.json() :
        Promise.reject({
            err:true,
            status: res.status || "000",
            statusText: res.statusText || "Error no identificado",
        }))
        .then(json => json)
        .catch((err) => err);
}