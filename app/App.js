import Bg from "./components/Bg/Bg.js";
import Header from "./components/Header/Header.js";
import BurguerBtn from "./components/BurgerBtn/BurguerBtn.js";
import Spinner from "./components/Spinner/Spinner.js";
import Inicio from "./components/Inicio/Inicio.js";
import Habilidades from "./components/Habilidades/Habilidades.js";
import Contacto from "./components/Contacto/Contacto.js";
import Footer from "./components/Footer/Footer.js";
import aux from "./helpers/auxFunt.js";


export default async function App() {
    const d = document;
    const $root = d.getElementById("root");
    
    
    
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
            aux();
            auxbl = true;
        }
    }, 2000);
}

