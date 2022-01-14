import "../styles/menuItemsDiv.css";
import { createDiv, createImage } from "./modules";
import { createMenuItems } from "../data/menuItems";

function createMenuItemsDiv() {
    const menuDiv = createDiv("menu");
    const menuItems = createMenuItems();

    for (let itemName in menuItems){
        const itemContainer = createDiv("itemContainer");
        const itemImg = createImage(menuItems[itemName].imgLink, "240", "320", "food image");
        const descDiv = createDiv("itemDesc");
        const namePara = document.createElement("p");
        namePara.textContent = itemName;
        const pricePara = document.createElement("p");
        pricePara.textContent = menuItems[itemName].price;
        descDiv.appendChild(namePara);
        descDiv.appendChild(pricePara);
        itemContainer.appendChild(itemImg);
        itemContainer.appendChild(descDiv);
        menuDiv.appendChild(itemContainer);
    }

    return menuDiv;
}

export { createMenuItemsDiv };