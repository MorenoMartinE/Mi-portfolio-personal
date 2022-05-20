const linkedinIcon = "../../app/assets/icons/linkedin.png"

export default function Footer(){
    const $footer = document.createElement("footer");
    $footer.setAttribute("id", "footer");
    $footer.classList.add("glass");
    $footer.classList.add("footer");

    const $linkedinUrl = document.createElement("a");
    const $linkedinIcon = document.createElement("img");
    const $gmail = document.createElement("p");

    $linkedinUrl.setAttribute("href", "https://www.linkedin.com/in/martin-esteban-moreno/")
    $linkedinUrl.setAttribute("target", "_blank");
    $linkedinIcon.classList.add("iconLink");
    $linkedinIcon.setAttribute("src", linkedinIcon);
    $gmail.innerHTML = "morenomartinesteban96@gmail.com";


    $linkedinUrl.appendChild($linkedinIcon)
    $footer.appendChild($linkedinUrl);
    $footer.appendChild($gmail);


    return $footer;
}