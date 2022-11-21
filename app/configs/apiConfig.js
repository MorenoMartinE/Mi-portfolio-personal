/**
 * Coloca en API_GITHUB_URLs tu usrname a ambas url, la cantidad de repos que desees mostrar de todas las publicas que
 * posee tu github y en REPOS_IMG_URL la url a la imagen que quieres que se muestre para cada repo. 
 * NOTA: Las repos se numeran en el orden que fueron creadas dentro de tu cuenta de github, si deseas no mostrar una repo
 * publica, deberas dirigirte al archivo "Sliders.js" dentro del componente "Inicio" y modificar el ciclo for dentro de la funcion
 * "export default async function Slider(n)" para que esa repo sea ignorada, asi mismo tendras que dejar un espacio en blanco dentro de 
 * REPOS_IMG_URL que coincida con la repo que deseas que sea ignorada.
 **/


export const API_GITHUB_URLs = {
    urlUsr : "https://api.github.com/users/MorenoMartinE",
    urlRep : "https://api.github.com/users/MorenoMartinE/repos",
    numReps : 6,
}

