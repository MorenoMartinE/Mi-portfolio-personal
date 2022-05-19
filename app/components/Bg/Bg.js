
const bgImage = "../../app/assets/img/bg.jpg"

export default function Bg(){
    const $bgContainer = document.createElement("div");
    const $bgImg = document.createElement("img");
    
    $bgImg.setAttribute("src", bgImage);
    $bgContainer.setAttribute("id", "bg");
    $bgContainer.classList.add("background");
    $bgContainer.appendChild($bgImg);
    




    return $bgContainer;

};