function createEl(number, nameImg, name, massa, count) {
    let card_space = document.querySelector('.cardspace');

    let card = document.createElement("div");
    card.classList = "card";

    let div_img_close = document.createElement("div");
    div_img_close.classList = "img_close";
    let img_close_button = document.createElement("button");
    img_close_button.classList = "img_close_button";
    img_close_button.setAttribute("id", "close_button");
    img_close_button.setAttribute("onclick", `remove(${number})`)
    let img_close = document.createElement("img");
    img_close.setAttribute("src", "img/close.png");
    img_close.setAttribute("alt", "close");
    img_close_button.appendChild(img_close);
    div_img_close.appendChild(img_close_button);

    let div_coffee_box = document.createElement("div");
    div_coffee_box.classList = "coffee_box_img";
    let img_coffee_box = document.createElement("img");
    img_coffee_box.setAttribute("src", `img/${nameImg}_img.png`);
    img_coffee_box.setAttribute("style", "height: 300px; border-radius: 50%")
    img_coffee_box.setAttribute("alt", "coffee_box");
    div_coffee_box.appendChild(img_coffee_box);

    let div_short = document.createElement("div");
    div_short.classList = "card_short_text";
    let h3_short = document.createElement("h3");
    h3_short.classList = "short_head";
    h3_short.innerHTML = `${name}`;
    let p_short = document.createElement("p");
    p_short.classList = "short_text";
    p_short.innerHTML = `${massa}`
    div_short.appendChild(h3_short);
    div_short.appendChild(p_short);

    let div_btn_wrap = document.createElement("div");
    div_btn_wrap.classList = "btn_wrapper";
    let div_counter = document.createElement("div");
    div_counter.classList = "counter";
    let btn_min = document.createElement("button");
    btn_min.classList = "btnminus";
    btn_min.setAttribute("id", "buttonCountMinus");
    btn_min.setAttribute("onclick", `minus(${number})`);
    let img_min = document.createElement("img");
    img_min.setAttribute("src", "img/Bottom-page/minus.png");
    img_min.setAttribute("alt", "-");
    let div_counternum = document.createElement("div");
    div_counternum.classList = "counternum";
    div_counternum.setAttribute("id", `count${number}`);
    div_counternum.innerHTML = `${count}`;
    let btn_plus = document.createElement("button");
    btn_plus.classList = "btnplus";
    btn_plus.setAttribute("id", "buttonCountPlus");
    btn_plus.setAttribute("onclick", `plus(${number})`);
    let img_plus = document.createElement("img");
    img_plus.setAttribute("src", "img/Bottom-page/plus.png");
    img_plus.setAttribute("alt", "+");

    btn_min.appendChild(img_min);
    div_counter.appendChild(btn_min);
    div_counter.appendChild(div_counternum);
    btn_plus.appendChild(img_plus);
    div_counter.appendChild(btn_plus);
    div_btn_wrap.appendChild(div_counter);

    card.appendChild(div_img_close);
    card.appendChild(div_coffee_box);
    card.appendChild(div_short);
    card.appendChild(div_btn_wrap);

    card_space.appendChild(card);
}

function isEmpty(order){
    for (let i in order){
        if (typeof order[i] !== 'undefined' && order[i].length > 0){
            return false;
        }
    }
    return true;
}

function remove(number) {
    let card_space = document.querySelector('.cardspace');
    card_space.removeChild(document.querySelector(`#count${number}`).parentElement.parentElement.parentElement);

    let order = JSON.parse(localStorage.getItem('order'));
    order[number] = {};
    if (isEmpty(order)){
        order = [{}];
    }
    localStorage.setItem('order', JSON.stringify(order));
}

function clearEl(){
    let card_space = document.querySelector('.cardspace');
    while (document.querySelectorAll(".card").length){
        card_space.removeChild(document.querySelector(".card"));
    }
}

function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

function setdate(){
    const monthNames = ["ЯНВАРЯ", "ФЕВРАЛЯ", "МАРТА", "АПРЕЛЯ", "МАЯ", "ИЮНЯ", "ИЮЛЯ", "АВГУСТА", "СЕНТЯБРЯ", "ОКТЯБРЯ", "НОЯБРЯ", "ДЕКАБРЯ"];

    let date = new Date();
    date = addDays(date, 3);

    document.querySelector(".time_text2").innerHTML = (date.getDate() + " " + monthNames[date.getMonth()]);
}

function nameImgParse(type){
    if (type === "mix"){
        return "first";
    } else if (type === "mono"){
        return "second";
    } else {
        return "third";
    }
}

function render(){
    clearEl();
    let order = JSON.parse(localStorage.getItem('order'));
    if (order !== null){
        for (let i in order){
            if (i !== 0){
                let this_ord = order[i][0];
                if (this_ord !== undefined){
                    createEl(i, nameImgParse(this_ord["Type"]), this_ord["Name"], this_ord["Massa"], this_ord["Count"]);
                }
            }
        }
    }
}

setdate();
render();