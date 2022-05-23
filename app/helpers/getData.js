import { API_GITHUB_URLs } from "./config.js";


export function getUser(){

    return fetch(API_GITHUB_URLs.urlUsr)
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
    return fetch(API_GITHUB_URLs.urlRep)
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