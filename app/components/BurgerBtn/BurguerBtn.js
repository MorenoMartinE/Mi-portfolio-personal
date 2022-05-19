import { inOut } from "../Header/Header.js"

const $burguerDiv = document.createElement("div");
const $burguerBtn = document.createElement("button");
const $burguerSpan = document.createElement("span");
const $burguerSpan2 = document.createElement("span");

export default function BurguerBtn(){
    
    $burguerDiv.classList.add("btnContainter");
    $burguerDiv.classList.add("responsive");

    
    $burguerBtn.classList.add("hamburger");
    $burguerBtn.classList.add("hamburger--arrowalt");
    $burguerBtn.classList.add("js-hamburger");
    $burguerBtn.classList.add("is-active");
    $burguerBtn.setAttribute("type", "button");

    
    $burguerSpan.classList.add("hamburger-box");

    
    $burguerSpan2.classList.add("hamburger-inner");

    $burguerSpan.appendChild($burguerSpan2);
    $burguerBtn.appendChild($burguerSpan);
    $burguerDiv.appendChild($burguerBtn);

    return $burguerDiv;
}

$burguerBtn.addEventListener("click", ()=>{

    if($burguerBtn.classList.contains("is-active")){
        $burguerBtn.classList.remove("is-active");
    }else{
        $burguerBtn.classList.add("is-active");
    }

    inOut();
});


