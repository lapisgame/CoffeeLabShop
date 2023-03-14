function identic(a, b) {
    if (a.Name === b.Name && a.Count === b.Count && a.Massa === b.Massa) {
        return true;
    } else {
        return false;
    }
}

function addToLocalStorage(newOrder) {
    let order = localStorage.getItem('order');
    if (order === null) {
        order = newOrder;
        localStorage.setItem('order', JSON.stringify(order));
    } else {
        order = JSON.parse(order);
        let flag = true;
        for (key in order) {
            if (key === '0') {
                if (identic(order[key], newOrder[0])) {
                    flag = false;
                }
            } else {
                if (identic(order[key][0], newOrder[0])) {
                    flag = false;
                }
            }
        }
        if (flag) {
            order.push(newOrder);
            localStorage.setItem('order', JSON.stringify(order));
        }
    }
}

let uurl = (new URL(document.URL));

if (uurl.href.indexOf('Product_page.html') > 0) {
    document.querySelector('#order-button').addEventListener('click', () => {
        let newOrder = [{
            Name: document.querySelector("#name_main").innerHTML,
            Price: document.querySelector("#price_main").innerHTML,
            Count: document.querySelector('#buttonCountNumber').innerHTML,
            Massa: document.querySelector('.gram-number').value,
            Type: uurl.searchParams.get('type')
        }];
        addToLocalStorage(newOrder);
    })
}

if (uurl.href.indexOf('catalog.html') > 0){
    let buttons = document.querySelectorAll('#order-button');
    buttons.forEach((el) => {
        el.addEventListener('click', () => {
            let newOrder = [{
                Name: el.parentElement.querySelector('#name').innerHTML,
                Price: el.parentElement.querySelector('#price').innerHTML,
                Count: "1",
                Massa: '250гр',
                Type: uurl.searchParams.get('type')
            }];
            addToLocalStorage(newOrder);
        })
    })
}