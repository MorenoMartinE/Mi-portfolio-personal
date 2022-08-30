/**
 * Recive una URL, devuelve un objeto reconstruido a patrit del archivo Json que obtiene de la peticion http a la rest API
 * en caso de resultar fallida la operacion devolvera el codigo de error y el mensaje entregado por el servidor, en caso de
 * no existir este se entregara un mensaje de error generico.
 */
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
