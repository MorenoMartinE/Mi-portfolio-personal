import { DATA_FOOTER } from "../../configs/footerConfig.js"; 




export default function Footer(){
    const $footer = document.createElement("footer");
    $footer.setAttribute("id", "footer");
    $footer.classList.add("glass");
    $footer.classList.add("footer");

    const $linkedinUrl = document.createElement("a");
    const $linkedinIcon = document.createElement("img");
    const $gmail = document.createElement("p");

    $linkedinUrl.setAttribute("href", DATA_FOOTER.linkedinUrl);
    $linkedinUrl.setAttribute("target", "_blank");
    $linkedinIcon.classList.add("iconLink");
    $linkedinIcon.setAttribute("src", DATA_FOOTER.linkedinIcon);
    $gmail.innerHTML = DATA_FOOTER.email;


    $linkedinUrl.appendChild($linkedinIcon)
    $footer.appendChild($linkedinUrl);
    $footer.appendChild($gmail);


    return $footer;
}