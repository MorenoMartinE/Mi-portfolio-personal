import getData from "../../helpers/getData.js";
import { API_GITHUB_URLs } from "../../helpers/config.js";
import Tarjeta from "./Tarjeta.js";
import Slider from "./Sliders.js"




export default async function Inicio(){

    const $inicio = document.createElement("section");
    $inicio.setAttribute("id", "Inicio");
    $inicio.classList.add("glass");
    $inicio.classList.add("Inicio");
    
    
    let Usrdata = await getData(API_GITHUB_URLs.urlUsr);
    $inicio.appendChild(Tarjeta(Usrdata));

    
    $inicio.appendChild(await Slider(API_GITHUB_URLs.numReps));

    



    return $inicio;
}

