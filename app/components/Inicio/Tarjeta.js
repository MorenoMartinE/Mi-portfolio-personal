const icon = "../../app/assets/icons/gitHub.png"

export default function(props){
    const $tarjeta = document.createElement("div");
    const $avatar = document.createElement("img");
    const $name = document.createElement("h3");
    const $text = document.createElement("p");
    const $gitHubH = document.createElement("a");
    const $gitHubI = document.createElement("img");
    
    $tarjeta.classList.add("tarjeta");
    $avatar.classList.add("avatar");
    $gitHubI.classList.add("icon");
    
    $avatar.setAttribute("src", props.avatar_url);
    $gitHubH.setAttribute("href", props.html_url);
    $gitHubH.setAttribute("target", "_blank");
    $gitHubI.setAttribute("src", icon);

    $name.innerHTML = props.name;
    $text.innerHTML = props.bio;

    $gitHubH.appendChild($gitHubI);
    $tarjeta.appendChild($avatar);
    $tarjeta.appendChild($name);
    $tarjeta.appendChild($text);
    $tarjeta.appendChild($gitHubH);

    
    
    return $tarjeta;
}