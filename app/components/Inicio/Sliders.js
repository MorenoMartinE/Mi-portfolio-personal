import { getGeneric, getRepos } from "../../helpers/getData.js";
const imgUrl = [
    "https://repository-images.githubusercontent.com/485933542/b6016c64-1cf7-4b7f-9257-c92e1b20052c",
    "https://repository-images.githubusercontent.com/479137070/06e80da9-57e0-4312-81a5-afbc35777b57"
]
//  Realizar un scrapping web de las url a futuro


export default async function Slider(n){

    const props = await getRepos();

    
    const $sliderContainer = document.createElement("div");
    const $titulo = document.createElement("a");
    const $imgTxt = document.createElement("div");
    const $imagen = document.createElement("img");
    const $text = document.createElement("p");
    const $lngsDisplay = document.createElement("div");
    const $carga = document.createElement("div");

    

    $sliderContainer.classList.add("sliderContainer");
    $sliderContainer.setAttribute("id", "sliderActual");
    $titulo.classList.add("prTitulo");
    $titulo.setAttribute("target", "_blank");
    $imgTxt.classList.add("dscContainer");
    $imagen.classList.add("vistaPrevia");
    $imagen.setAttribute("src", imgUrl[n]);
    $carga.classList.add("carga");
    $carga.setAttribute("id", "carga");
    
    
    $text.classList.add("prText");
    
    $lngsDisplay.classList.add("flPrc0");

    let lngs = await getGeneric(props[n].languages_url);
    let lngsKeys = Object.keys(lngs);
    let arrLngs = Object.values(lngs);
    let totalLngs = 0;
    

    for(let i = 0; i < lngsKeys.length; i++){
        let $el = document.createElement("div");
        let $bl = document.createElement("div");
        let $bltxt = document.createElement("p");

        $el.classList.add("flPrc")
        $bl.classList.add("gl");
        $bl.classList.add(lngsKeys[i]);
        $bltxt.classList.add("codeTxt");

        for(let x = 0; x < arrLngs.length; x++){
            totalLngs += arrLngs[x];
        }

        let pr = 0;
        pr = (arrLngs[i] * 100) / totalLngs;
        totalLngs = 0;
        
        
        $bltxt.innerText = `${lngsKeys[i]}: %${pr.toFixed(2)}`;

        

        $el.appendChild($bl);
        $el.appendChild($bltxt);
        $lngsDisplay.appendChild($el);
    }
   
    
    



        let aux = props[n].name
        $titulo.innerHTML = aux.replace(/-/g, " ");
        $titulo.setAttribute("href", props[n].html_url);
        $text.innerHTML = props[n].description;
    

    $sliderContainer.appendChild($titulo);
    $imgTxt.appendChild($imagen);
    $imgTxt.appendChild($text);
    $sliderContainer.appendChild($imgTxt);
    $sliderContainer.appendChild($lngsDisplay);
    $sliderContainer.appendChild($carga);
    

    return $sliderContainer;
}

