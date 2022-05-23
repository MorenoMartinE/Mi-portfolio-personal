import SwitchBtn from "./SwitchBtn.js";
import { DATOS_MENU } from "../../helpers/config.js";




export default function MenuItems(){
    const $list = document.createElement("ul");
    const $liItems = new DocumentFragment();

    for(let i = 0; i < DATOS_MENU.ELEMENTOS_MENU.length; i++){
        let $item = document.createElement("li");
        let $hpr = document.createElement("a");
        $hpr.classList.add("link");
        
        if(i === 0){
            $hpr.classList.add("activo");
        }

        $hpr.setAttribute("href", DATOS_MENU.VINCULOS_MENU[i]);
        $hpr.innerHTML = DATOS_MENU.ELEMENTOS_MENU[i];
        $item.appendChild($hpr);
        $liItems.appendChild($item);
    }

    let $item = document.createElement("li");
    $item.appendChild(SwitchBtn());
    $liItems.appendChild($item);

    $list.appendChild($liItems);

    return $list;
}


window.onhashchange = () =>{
    const $el = document.getElementsByClassName("link");
    const $st = document.getElementsByTagName("section");

    const URLactual = window.location;

    for(let i = 0; i < DATOS_MENU.ELEMENTOS_MENU.length; i++){
        if(URLactual.hash === $el[i].hash){
            $el[i].classList.add("activo");
            window.scroll(0, -118 + $st[i].offsetTop);
        }else{
            $el[i].classList.remove("activo");
        }
    }    
}