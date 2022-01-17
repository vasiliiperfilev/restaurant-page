import { createHome } from "./home";
import { createMenu } from "./menu";
import { createContact } from "./contact";
import { createHeader } from "./header";
import { createFooter } from "./footer";
import "../styles/style.css";

function createPage(main){
    const content = document.querySelector("#content");

    //clean content
    content.innerHTML = "";

    //header
    const header = createHeader();
    content.appendChild(header);

    //add event listeners for tabbing
    document.querySelector(".Home").addEventListener("click", createPage.bind(null, createHome()));
    document.querySelector(".header img").addEventListener("click", createPage.bind(null, createHome()));
    document.querySelector(".Menu").addEventListener("click", createPage.bind(null, createMenu()));
    document.querySelector(".Contacts").addEventListener("click", createPage.bind(null, createContact()));

    //main
    content.appendChild(main);

    //footer
    const footer = createFooter();
    content.appendChild(footer);
}

createPage(createHome());