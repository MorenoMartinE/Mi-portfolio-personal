import { DATA_HABILIDADES } from "../../helpers/config.js";


export default function LoadContainers(){
    const $contenedores = new DocumentFragment();

    for(let i = 0; i < DATA_HABILIDADES.HABILIDADES.length; i++){
        let $contenedor = document.createElement("div");
        let $icon = document.createElement("img");
        let $text = document.createElement("h3");
        let $progreso = document.createElement("div");

    
        $contenedor.classList.add("glass");
        $contenedor.classList.add("contHabilidad");
        $icon.classList.add("iconHabilidad");
        $icon.setAttribute("src", DATA_HABILIDADES.ICONOS[i]);
        $text.classList.add("txtHabilidades");
        $text.innerHTML = DATA_HABILIDADES.HABILIDADES[i];
        $progreso.classList.add("progreso");


        $progreso.setAttribute("style", `width: ${DATA_HABILIDADES.ESTADO[i]}%`);
        if(DATA_HABILIDADES.ESTADO[i] >= 70){
            $progreso.setAttribute("style", `
                width: ${DATA_HABILIDADES.ESTADO[i]}%; 
                background-color: rgba(30, 255, 0, 0.589)
            `)
        }else if(DATA_HABILIDADES.ESTADO[i] < 70 && DATA_HABILIDADES.ESTADO[i] >= 50){
            $progreso.setAttribute("style", `
                width: ${DATA_HABILIDADES.ESTADO[i]}%; 
                background-color: rgba(255, 251, 0, 0.589)
            `)
        }else if(DATA_HABILIDADES.ESTADO[i] < 50 && DATA_HABILIDADES.ESTADO[i] >= 30){
            $progreso.setAttribute("style", `
                width: ${DATA_HABILIDADES.ESTADO[i]}%; 
                background-color: rgba(255, 136, 0, 0.589)
            `)
        }else{
            $progreso.setAttribute("style", `
                width: ${DATA_HABILIDADES.ESTADO[i]}%; 
                background-color: rgba(255, 0, 0, 0.589)
            `)
        }

        $contenedor.appendChild($icon);
        $contenedor.appendChild($text);
        $contenedor.appendChild($progreso);


        $contenedores.appendChild($contenedor);
    }



    return $contenedores;
}