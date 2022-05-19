import Menu from "./Menu.js"

const $header = document.createElement("header");


export default function Header() {
    
    $header.appendChild(Menu());
    $header.setAttribute("id", "hdr");
    $header.classList.add("glass");

    return $header;
}

export function inOut(){
    if($header.classList.contains("out")){
        $header.classList.remove("out");
    }else{
        $header.classList.add("out");
    }
}

