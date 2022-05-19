import SwitchBtn from "./SwitchBtn.js";

const ELEMENTOS_MENU = [
    'Inicio', 
    'Habilidades', 
    'Contacto'
];

const VINCULOS_MENU = [
    "#inicio",
    "#habilidades",
    "#contacto"
]


export default function MenuItems(){
    const $list = document.createElement("ul");
    const $liItems = new DocumentFragment();

    for(let i = 0; i < ELEMENTOS_MENU.length; i++){
        let $item = document.createElement("li");
        let $hpr = document.createElement("a");
        $hpr.classList.add("link");
        
        if(i === 0){
            $hpr.classList.add("activo");
        }

        $hpr.setAttribute("href", VINCULOS_MENU[i]);
        $hpr.innerHTML = ELEMENTOS_MENU[i];
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

    for(let i = 0; i < ELEMENTOS_MENU.length; i++){
        if(URLactual.hash === $el[i].hash){
            $el[i].classList.add("activo");
            window.scroll(0, -110 + $st[i].offsetTop);
        }else{
            $el[i].classList.remove("activo");
        }
    }    
}