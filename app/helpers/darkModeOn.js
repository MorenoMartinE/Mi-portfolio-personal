

export default function darkModeOn(){

    const $spinner = document.getElementById("sw");
    const $bg = document.getElementById("bg");
    const $header = document.getElementById("hdr");
    const $inicio = document.getElementById("Inicio");
    const $contacto = document.getElementById("contacto");
    const $footer = document.getElementById("footer");
    const $habilidades = document.getElementsByClassName("contHabilidad");

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

            for(let i = 0; i < $habilidades.length; i++){
                $habilidades[i].classList.add("glassDark");
                $habilidades[i].classList.remove("glass");
            }

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

            for(let i = 0; i < $habilidades.length; i++){
                $habilidades[i].classList.add("glass");
                $habilidades[i].classList.remove("glassDark");
            }
        }
    });








}