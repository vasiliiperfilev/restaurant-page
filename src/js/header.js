import "../styles/header.css";
import { createDiv, createImage } from "./modules";
import Logo1 from "../images/header/logo1.png"

function createHeader() {
    const header = createDiv("header");
    const img = createImage(Logo1, "48", "48", "top logo");
    const ul = document.createElement("ul");
    const menus = ["Home", "Menu", "Contacts"];
    menus.forEach((menu) => {
        const li = document.createElement("li");
        li.textContent = menu;
        li.classList.add(menu);
        ul.appendChild(li);
    })
    header.appendChild(img);
    header.appendChild(ul);
    return header;
}

export { createHeader }