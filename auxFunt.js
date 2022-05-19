import Slider from "../components/Inicio/Sliders.js";

export default function aux(){

    const $root = document.getElementById("root");
    const $spinner = document.getElementById("sw");
    const $bg = document.getElementById("bg");
    const $header = document.getElementById("hdr");
    const $inicio = document.getElementById("Inicio");
    const $contacto = document.getElementById("Contacto");
    const $footer = document.getElementById("footer");


    setTimeout(() => {
        $root.removeChild(document.getElementById("spinner"));
    }, 2000);

  
    let act = 1;
    setInterval(async function(){
        let $actual = document.getElementById("sliderActual");
        let $inicio = document.getElementById("Inicio");
        
        let $siguiente = await Slider(act);


        $siguiente.style.opacity = ("0");
        $actual.style.opacity = ("0");

        setTimeout(async function(){
            $inicio.removeChild($actual);
            $inicio.appendChild($siguiente);
            setTimeout(() => {
                $siguiente.style.opacity = ("1");
            }, 100);
        }, 500);

        if(act >= 1){
            act = 0;
        }else{
            act++;
        }

    }, 12000);


    $spinner.addEventListener("click", () =>{
        if(!$spinner.checked){
            $bg.classList.add("background-dark");
            $bg.classList.remove("background");

            $header.classList.add("glassDark");
            $header.classList.remove("glass");

            $inicio.classList.add("glassDark");
            $inicio.classList.remove("glass");

            $contacto.classList.add("glassDark");
            $contacto.classList.remove("glass");

            $footer.classList.add("glassDark");
            $footer.classList.remove("glass");

        }else{
            $bg.classList.add("background");
            $bg.classList.remove("background-dark");

            $header.classList.add("glass");
            $header.classList.remove("glassDark");

            $inicio.classList.add("glass");
            $inicio.classList.remove("glassDark");

            $contacto.classList.add("glass");
            $contacto.classList.remove("glassDark");

            $footer.classList.add("glass");
            $footer.classList.remove("glassDark");
        }
    });

















};