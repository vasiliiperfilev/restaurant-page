function createDiv(divClass){
    const newDiv = document.createElement("div");
    if (divClass !== "") newDiv.classList.add(divClass);
    return newDiv;
}

function createImage(src, height, width, alt){
    const newImage = document.createElement("img");
    newImage.src = src;
    newImage.height = height;
    newImage.width = width;
    newImage.alt = alt;
    return newImage;
}

export { createDiv, createImage }