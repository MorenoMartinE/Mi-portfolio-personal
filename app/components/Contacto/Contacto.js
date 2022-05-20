export default function Contacto(){
    const $contacto = document.createElement("form");
    const $labelNombre = document.createElement("label");
    const $inputNombre = document.createElement("input");
    const $labelContacto = document.createElement("label");
    const $inputContacto = document.createElement("input");
    const $labelTextArea = document.createElement("label");
    const $inputTextArea = document.createElement("textarea");
    const $boton = document.createElement("button");



    $contacto.setAttribute("id", "contacto");
    $contacto.classList.add("glass");
    $contacto.classList.add("Contacto");
    $contacto.setAttribute("action", "submit");
    $inputNombre.classList.add("textInput");
    $inputContacto.classList.add("textInput");


    $labelNombre.innerHTML = "Nombre";
    $labelNombre.setAttribute("for", "nomrbe");
    $inputNombre.setAttribute("type", "text");
    $inputNombre.setAttribute("id", "nombre_form");
    $inputNombre.setAttribute("name", "nomrbe");

    $labelContacto.innerHTML = "Teléfono / e-mail";
    $labelContacto.setAttribute("for", "contacto");
    $inputContacto.setAttribute("type", "text");
    $inputContacto.setAttribute("id", "contacto_form");
    $inputContacto.setAttribute("name", "contacto");

    $labelTextArea.innerHTML = "Mensaje";
    $labelTextArea.setAttribute("for", "mensaje");
    $inputTextArea.setAttribute("row", "5");
    $inputTextArea.setAttribute("id", "textArea_form");
    $inputTextArea.setAttribute("name", "mensaje");

    $boton.setAttribute("id", "boton_form");
    $boton.setAttribute("type", "submit");
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