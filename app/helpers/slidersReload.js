import Slider from "../components/Inicio/Sliders.js";
import { API_GITHUB_URLs } from "../configs/apiConfig.js";


export default function spinnerReload(){
    let act = 0;
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
    
        if(act >= API_GITHUB_URLs.numReps){
            act = 0;
        }else{
            act++;
        }
    
    }, 12000);
}
