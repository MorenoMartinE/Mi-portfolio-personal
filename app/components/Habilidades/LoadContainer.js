const DATA = {
     HABILIDADES : [
         "HTML", 
         "CSS", 
         "JavaScript",
         "React",
         "C",
         "C#",
         "Java",
         "MySQL",
         "PHP",
         "WordPress",
        ],
     ICONOS : [
         "../../app/assets/icons/html5.png",
         "../../app/assets/icons/css3.png",
         "../../app/assets/icons/JavaScript.png",
         "./../app/assets/icons/reactjs.png",
         "./../app/assets/icons/C.png",
         "./../app/assets/icons/CShar.png",
         "./../app/assets/icons/java.png",
         "./../app/assets/icons/MySql.png",
         "./../app/assets/icons/php.png",
         "./../app/assets/icons/WordPress.png",
         ],
     ESTADO : [
         87,
         75,
         79,
         55,
         70,
         60,
         50,
         35,
         30,
         60,
      ],
}


export default function LoadContainers(){
    const $contenedores = new DocumentFragment();

    for(let i = 0; i < DATA.HABILIDADES.length; i++){
        let $contenedor = document.createElement("div");
        let $icon = document.createElement("img");
        let $text = document.createElement("h3");
        let $progreso = document.createElement("div");

    
        $contenedor.classList.add("glass");
        $contenedor.classList.add("contHabilidad");
        $icon.classList.add("iconHabilidad");
        $icon.setAttribute("src", DATA.ICONOS[i]);
        $text.classList.add("txtHabilidades");
        $text.innerHTML = DATA.HABILIDADES[i];
        $progreso.classList.add("progreso");


        $progreso.setAttribute("style", `width: ${DATA.ESTADO[i]}%`);
        if(DATA.ESTADO[i] >= 70){
            $progreso.setAttribute("style", `
                width: ${DATA.ESTADO[i]}%; 
                background-color: rgba(30, 255, 0, 0.589)
            `)
        }else if(DATA.ESTADO[i] < 70 && DATA.ESTADO[i] >= 50){
            $progreso.setAttribute("style", `
                width: ${DATA.ESTADO[i]}%; 
                background-color: rgba(255, 251, 0, 0.589)
            `)
        }else if(DATA.ESTADO[i] < 50 && DATA.ESTADO[i] >= 30){
            $progreso.setAttribute("style", `
                width: ${DATA.ESTADO[i]}%; 
                background-color: rgba(255, 136, 0, 0.589)
            `)
        }else{
            $progreso.setAttribute("style", `
                width: ${DATA.ESTADO[i]}%; 
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