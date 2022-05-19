const spinner = "../../app/assets/icons/spinner.svg"

export default function Spinner(){
    const $spinnerDiv = document.createElement("div");
    const $spinner = document.createElement("img");

    $spinner.setAttribute("src", spinner);

    $spinnerDiv.classList.add("spinner");
    $spinnerDiv.classList.add("glass");
    $spinnerDiv.setAttribute("id", "spinner");
    $spinnerDiv.appendChild($spinner);
    

    return $spinnerDiv;
}