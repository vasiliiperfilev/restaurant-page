import "../styles/menu.css";
import { createDiv, createImage } from "./modules";
import { createHeader } from "./header";
import { createFooter } from "./footer";
import { createMenuItemsDiv } from "./menuItemsDiv";

function createMenu() {
    const main = createDiv("main");

    //menu
    const wrapper = createDiv("wrapper");
    const mainDishes = createDiv("mainDishes");
    const h3 = document.createElement("h3");
    h3.textContent = "Our tasty meals!";
    mainDishes.appendChild(h3);
    const menu = createMenuItemsDiv();
    mainDishes.appendChild(menu);
    wrapper.appendChild(mainDishes);
    main.appendChild(wrapper);

    return main;
}

export { createMenu };