import "../styles/footer.css";
import { createDiv, createImage } from "./modules";
import GitHubLogo from "../images/footer/GitHubLogo.png"

function createFooter() {
    const footer = createDiv("footer");
    const img = createImage(GitHubLogo, "64", "64", "git hub logo");
    const link = document.createElement("a");
    link.href = "https://github.com/vasiliiperfilev"
    footer.textContent = "Copyright © 2021 Vasilii Perfilev";
    link.appendChild(img);
    footer.appendChild(link);
    return footer;
}

export { createFooter }