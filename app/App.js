import Bg from "./components/Bg/Bg.js";
import Header from "./components/Header/Header.js";
import BurguerBtn from "./components/BurgerBtn/BurguerBtn.js";
import Spinner from "./components/Spinner/Spinner.js";
import Inicio from "./components/Inicio/Inicio.js";
import Habilidades from "./components/Habilidades/Habilidades.js";
import Contacto from "./components/Contacto/Contacto.js";
import Footer from "./components/Footer/Footer.js";

import spinnerReload from "./helpers/slidersReload.js";
import darkModeOn from "./helpers/darkModeOn.js";
import formFunction from "./helpers/formFunction.js";


export default async function App() {
    const $root = document.getElementById("root");
    
    
    
    $root.appendChild(Bg());

    $root.appendChild(BurguerBtn());
    $root.appendChild(Header());

    $root.appendChild(await Inicio());
    $root.appendChild(Habilidades());
    $root.appendChild(Contacto());
    
    $root.appendChild(Footer());

    
    $root.appendChild(Spinner());


    let auxbl = false;
    setTimeout(()=> {
        while(document.readyState === 'complete' && auxbl === false){
            spinnerReload();
            darkModeOn();
            formFunction();
            auxbl = true;
        }
    }, 2000);
}

