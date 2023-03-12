function render(minIndex, maxIndex, type) {
    let count = 0;
    db.collection('Prod').get().then((el) => {
        for (let i = 0; i < el.docs.length; i++) {
            if (el.docs[i] !== undefined) {
                let id = el.docs[i].id;
                db.collection('Prod').doc(id).get().then((elem) => {
                    let thisCard = document.querySelector('.hidden_card');
                    if (thisCard !== null && elem.data().Type === type) {
                        count++;
                        if (minIndex <= count && count <= maxIndex) {
                            if (type === "mix") {
                                thisCard.querySelector("#compound").innerHTML = "Состав: " + elem.data().Compound;
                                thisCard.querySelector("#bitterness").setAttribute("value", `${elem.data().Bitterness}`)
                            }
                            else if (type === "mono") {
                                thisCard.querySelector("#compound").innerHTML = "Вкус: " + elem.data().Taste;
                                thisCard.querySelector("#bitterness").setAttribute("value", `${elem.data().Bitterness}`)
                            }
                            else {
                                thisCard.querySelector("#compound").innerHTML = "Вкус: " + elem.data().Taste;
                                thisCard.querySelector("#country").innerHTML = "Оценка Q-грейдера: " + elem.data().Q + " SCA";
                                thisCard.querySelector(".card_characters").innerHTML = thisCard.querySelector(".card_characters").innerHTML.replace("Горчинка", "Сладость");
                                thisCard.querySelector("#bitterness").setAttribute("value", `${elem.data().Sweetness}`)
                            }
                            thisCard.querySelector("#name").innerHTML = elem.data().Name;
                            thisCard.querySelector("#image_img").setAttribute("src", `img/${elem.data().Image}.png`);
                            thisCard.querySelector('#image_a').setAttribute("href", `Product_page.html?name=${elem.data().Name}`);
                            thisCard.querySelector("#price").innerHTML = elem.data().Price + " руб";
                            thisCard.querySelector("#grinding").innerHTML = "Помол: " + elem.data().Grinding;
                            thisCard.querySelector("#stars").setAttribute("src", `img/catalog/${elem.data().Stars}_stars.svg`);


                            thisCard.querySelector("#density").setAttribute("value", `${elem.data().Density}`)
                            thisCard.querySelector("#acidity").setAttribute("value", `${elem.data().Acidity}`)

                            thisCard.classList.remove('hidden_card');
                        }
                    }
                })
            }
        }
    })
}

const url = document.URL;
let pageIndex = (new URL(url)).searchParams.get('page');
let type = (new URL(url)).searchParams.get('type');

render(1 + (6 * (pageIndex - 1)), 6 + (6 * (pageIndex - 1)), type)