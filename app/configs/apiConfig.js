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
    numReps : 5,
}


export const REPOS_IMG_URL = [
   
    "https://repository-images.githubusercontent.com/485933542/7a42a097-64f2-4338-9b9e-1c3cd2ee289b",
    "https://repository-images.githubusercontent.com/485933542/7a42a097-64f2-4338-9b9e-1c3cd2ee289b",
    "https://repository-images.githubusercontent.com/511135058/49a4bc9d-2218-42e7-baa7-1041948f462d",
    "https://repository-images.githubusercontent.com/479137070/06e80da9-57e0-4312-81a5-afbc35777b57",
    "https://repository-images.githubusercontent.com/531011037/76fbf90b-9918-4d7c-ba72-e54e2b5aae10",
    "https://repository-images.githubusercontent.com/510566718/89cf833e-9a6d-49a9-ae97-0878689e8210",
    
]