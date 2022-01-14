import "../styles/home.css";
import { createDiv, createImage } from "./modules";
import { createHeader } from "./header";
import { createFooter } from "./footer";
import Data from "../data/home.json";
import Logo from "../images/home/logo2.png";
import Food from "../images/home/foods1.jpeg";
import Vine from "../images/home/foods2.jpg";

function createHome() {
    const main = createDiv("main");

    //restaurant photo
    const restPhotoDiv = createDiv("restaurant-photo");
    main.appendChild(restPhotoDiv);

    //restaurant information div
    const infoDiv = createDiv("info");
    const logoDiv = createDiv("restaurant-logo");
    const logoImg = createImage(Logo,"256", "256", "main logo");
    const restNamePara = document.createElement("p");
    restNamePara.textContent = Data.restName;
    const promoDiv = createDiv("promo-text");
    const promoPara = document.createElement("p");
    promoPara.textContent = Data.promoText;
    logoDiv.appendChild(logoImg);
    logoDiv.appendChild(restNamePara);
    promoDiv.appendChild(promoPara);
    infoDiv.appendChild(logoDiv);
    infoDiv.appendChild(promoDiv);
    main.appendChild(infoDiv);

    //galery div
    const galleryDiv = createDiv("gallery");
    const foodImg = createImage(Food, "300", "450", "food photo");
    const vineImg = createImage(Vine, "300", "450", "vine photo");
    galleryDiv.appendChild(foodImg);
    galleryDiv.appendChild(vineImg);
    main.appendChild(galleryDiv);

    //quote div
    const quoteDiv = createDiv("quote");
    const quotePara = document.createElement("p");
    quotePara.textContent = Data.quote;
    quoteDiv.appendChild(quotePara);
    main.appendChild(quoteDiv);

    //address div
    const addressDiv = createDiv("address");
    const map = document.createElement("iframe");
    map.src = Data.iframe;
    map.loading = "lazy";
    map.allowFullscreen = "";
    const addressTextDiv = createDiv("address-text");
    addressTextDiv.textContent = Data.address;
    addressDiv.appendChild(map);
    addressDiv.appendChild(addressTextDiv);
    main.appendChild(addressDiv);

    return main;
}

export { createHome };