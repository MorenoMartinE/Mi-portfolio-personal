
export default function SwitchBtn(){
    const $switchDiv = document.createElement("div");
    $switchDiv.classList.add("container");

    const $label01 = document.createElement("label");
    $label01.classList.add("switch");


    const $input = document.createElement("input");
    $input.setAttribute("id", "sw");
    $input.classList.add("switch__checkbox");
    $input.setAttribute("type", "checkbox");
    $input.setAttribute("name", "live-sw--name");
    $input.setAttribute("checked", "true");
    $input.setAttribute("tabindex", "1");

    const $span02 = document.createElement("span");
    $span02.classList.add("switch__elements");
    $span02.setAttribute("aria-hidden", "true");

    const $span03 = document.createElement("span");
    $span03.classList.add("switch__inner");

    const $span04 = document.createElement("span");
    $span04.classList.add("switch__left");
    $span04.innerHTML = "Light";

    const $span05 = document.createElement("span");
    $span05.classList.add("switch__right");
    $span05.innerHTML = "Dark";

    const $span06 = document.createElement("span");
    $span06.classList.add("switch__middle");

    $span03.appendChild($span04);
    $span03.appendChild($span05);
    $span03.appendChild($span06);

    $span02.appendChild($span03);

    $label01.appendChild($input);
    $label01.appendChild($span02);

    $switchDiv.appendChild($label01);

    return $switchDiv;
}