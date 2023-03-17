function createEl(number, nameImg){
    let card = document.createElement("div");

    let div_img_close = document.createElement("div");
    div_img_close.classList = "img_close";
    let img_close_button = document.createElement("button");
    img_close_button.classList = "img_close_button";
    img_close_button.setAttribute("id", "close_button");
    let img_close = document.createElement("img");
    img_close.setAttribute("src", "img/close.png");
    img_close.setAttribute("alt", "close");
    img_close_button.appendChild(img_close);
    div_img_close.appendChild(img_close_button);


    let div_coffee_box = document.createElement("div");
    div_coffee_box.classList = "coffee_box_img";
    let img_coffee_box = document.createElement("img");
    img_coffee_box.setAttribute("src", `img/${nameImg}.png`);
    img_coffee_box.setAttribute("alt", "coffee_box");
    div_coffee_box.appendChild(img_coffee_box);
}