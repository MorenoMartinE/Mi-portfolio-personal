import { getUser, getRepos } from "../../helpers/getData.js";
import Tarjeta from "./Tarjeta.js";
import Slider from "./Sliders.js"
let Usrdata = {};



export default async function Inicio(){

    const $inicio = document.createElement("section");
    $inicio.setAttribute("id", "Inicio");
    $inicio.classList.add("glass");
    $inicio.classList.add("Inicio");
    
    
    Usrdata = await getUser();
    $inicio.appendChild(Tarjeta(Usrdata));

    
    $inicio.appendChild(await Slider(1));

    



    return $inicio;
}

