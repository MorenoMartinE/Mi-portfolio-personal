import MenuItems from "./MenuItems.js";



export default function Menu(){
    const $menu = document.createElement("nav");
    $menu.appendChild(MenuItems());


    return $menu;
}