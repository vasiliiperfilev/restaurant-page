import "../styles/contact.css";
import { createDiv, createImage } from "./modules";
import { createHeader } from "./header";
import { createFooter } from "./footer";
import Data from "../data/contact.json";
import Iframe from "../data/home.json";

function createContact() {

    const main = createDiv("main")

    //bg image
    const bgImage = createDiv("bgImage");
    main.appendChild(bgImage);

    //contacts
    const contactsDiv = createDiv("contacts");
    const map = document.createElement("iframe");
    map.src = Iframe.iframe;
    map.loading = "lazy";
    map.allowFullscreen = "";
    const contactsTextDiv = createDiv("contacts-text");
    for (const key in Data){
        const line = document.createElement("p");
        line.textContent = key + ": " + Data[key];
        contactsTextDiv.appendChild(line);
    }
    contactsDiv.appendChild(map);
    contactsDiv.appendChild(contactsTextDiv);
    main.appendChild(contactsDiv);

    return main;
}

export { createContact };