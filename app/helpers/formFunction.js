export default function formFunction(){
    const $form = document.getElementById("contacto");

    $form.addEventListener("submit", (event) => {
        event.preventDefault();
        let $formElements = $form.childNodes;


        let nombre = document.getElementById("nombre_form").value;
        let contacto = document.getElementById("contacto_form").value;
        let texto = document.getElementById("textArea_form").value;

        for(let i = 0; i < $formElements.length; i++){
            $formElements[i].style.opacity = ("0");
        }

        setTimeout(() => {
            for(let i = 0; i < $formElements.length; i++){
                $formElements[i].style.display = ("none");
            }

            let $mensaje = document.createElement("h1");
            $mensaje.style.opacity = ("0");
            $mensaje.innerHTML = "Mensaje enviado!"
            $form.appendChild($mensaje);
            setTimeout(() => {
                $mensaje.style.opacity = ("1");
            }, 400);
        }, 2000);

    });
}