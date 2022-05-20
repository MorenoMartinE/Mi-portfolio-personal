export default function Contacto(){
    const $contacto = document.createElement("section");
    const $labelNombre = document.createElement("label");
    const $inputNombre = document.createElement("input");
    const $labelContacto = document.createElement("label");
    const $inputContacto = document.createElement("input");
    const $labelTextArea = document.createElement("label");
    const $inputTextArea = document.createElement("textarea");
    const $boton = document.createElement("button");



    $contacto.setAttribute("id", "Contacto");
    $contacto.classList.add("glass");
    $contacto.classList.add("Contacto");
    $inputNombre.classList.add("textInput");
    $inputContacto.classList.add("textInput");


    $labelNombre.innerHTML = "Nombre";
    $inputNombre.setAttribute("type", "text");
    $inputNombre.setAttribute("id", "nombre_form");

    $labelContacto.innerHTML = "Teléfono / e-mail";
    $inputContacto.setAttribute("type", "text");
    $inputContacto.setAttribute("id", "contacto_form");

    $labelTextArea.innerHTML = "Mensaje";
    $inputTextArea.setAttribute("row", "5");
    $inputTextArea.setAttribute("id", "textArea_form");

    $boton.setAttribute("id", "boton_form");

    $boton.innerHTML = "Enviar";

    $contacto.appendChild($labelNombre);
    $contacto.appendChild($inputNombre);
    $contacto.appendChild($labelContacto);
    $contacto.appendChild($inputContacto);
    $contacto.appendChild($labelTextArea);
    $contacto.appendChild($inputTextArea);


    $contacto.appendChild($boton);

    return $contacto;
}