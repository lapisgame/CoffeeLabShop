function plus(x) {
    let count = document.querySelector(`#count${x}`);
    let number = +count.innerHTML;

    let order = JSON.parse(localStorage.getItem('order'));
    if (number <= 9) {
        number++;
        count.innerHTML = number;
        console.log(order[x][0]["Count"]);
        order[x][0]["Count"] = number.toString();
    }
    localStorage.setItem('order', JSON.stringify(order));
}

function minus(x) {
    let count = document.querySelector(`#count${x}`);
    let number = +count.innerHTML;

    let order = JSON.parse(localStorage.getItem('order'));
    if (number >= 2) {
        number--;
        count.innerHTML = number;
        order[x][0]["Count"] = number.toString();
    }
    localStorage.setItem('order', JSON.stringify(order));
}