import LoadContainers from "./LoadContainer.js";

export default function Habilidades(){
    const $habilidades = document.createElement("section");


    $habilidades.setAttribute("id", "Habilidades");
    $habilidades.classList.add("Habilidades");

    $habilidades.appendChild(LoadContainers());


    return $habilidades;
}