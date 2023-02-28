function load(name){
    console.log(name);

    
    db.collection('Prod').doc(name).get().then((el) => {
        if (el.data().Type === "mix"){
            let a = document.querySelector('#all1')
            a.setAttribute('href','Product_page.html?name=Arpeggio')
            a.querySelector("#img").setAttribute('src','img/first_img.png')
            a.querySelector('#p').innerHTML = "Arpeggio";

            a = document.querySelector('#all2')
            a.setAttribute('href','Product_page.html?name=Capriccio')
            a.querySelector("#img").setAttribute('src','img/first_img.png')
            a.querySelector('#p').innerHTML = "Capriccio";

            a = document.querySelector('#all3')
            a.setAttribute('href','Product_page.html?name=Esperanza')
            a.querySelector("#img").setAttribute('src','img/first_img.png')
            a.querySelector('#p').innerHTML = "Esperanza";

            a = document.querySelector('#all4')
            a.setAttribute('href','Product_page.html?name=Fugace')
            a.querySelector("#img").setAttribute('src','img/first_img.png')
            a.querySelector('#p').innerHTML = "Fugace";

            a = document.querySelector('#all5')
            a.setAttribute('href','Product_page.html?name=Милано')
            a.querySelector("#img").setAttribute('src','img/first_img.png')
            a.querySelector('#p').innerHTML = "Милано";

            a = document.querySelector('#all6')
            a.setAttribute('href','Product_page.html?name=Портофино')
            a.querySelector("#img").setAttribute('src','img/first_img.png')
            a.querySelector('#p').innerHTML = "Портофино";

        }
        else if (el.data().Type === "mono"){
            let a = document.querySelector('#all1')
            a.setAttribute('href','Product_page.html?name=Бразилия')
            a.querySelector("#img").setAttribute('src','img/second_img.png')
            a.querySelector('#p').innerHTML = "Бразилия";

            a = document.querySelector('#all2')
            a.setAttribute('href','Product_page.html?name=Гватемала')
            a.querySelector("#img").setAttribute('src','img/second_img.png')
            a.querySelector('#p').innerHTML = "Гватемала";

            a = document.querySelector('#all3')
            a.setAttribute('href','Product_page.html?name=Колумбия')
            a.querySelector("#img").setAttribute('src','img/second_img.png')
            a.querySelector('#p').innerHTML = "Колумбия";

            a = document.querySelector('#all4')
            a.setAttribute('href','Product_page.html?name=Коста Рика')
            a.querySelector("#img").setAttribute('src','img/second_img.png')
            a.querySelector('#p').innerHTML = "Коста Рика";

            a = document.querySelector('#all5')
            a.setAttribute('href','Product_page.html?name=Куба')
            a.querySelector("#img").setAttribute('src','img/second_img.png')
            a.querySelector('#p').innerHTML = "Куба";

            a = document.querySelector('#all6')
            a.setAttribute('href','Product_page.html?name=Эфиопия')
            a.querySelector("#img").setAttribute('src','img/second_img.png')
            a.querySelector('#p').innerHTML = "Эфиопия";


        }
        else{
            let a = document.querySelector('#all1')
            a.setAttribute('href','Product_page.html?name=Кения Киамбу АВ')
            a.querySelector("#img").setAttribute('src','img/third_img.png')
            a.querySelector('#p').innerHTML = "Кения Киамбу АВ";

            a = document.querySelector('#all2')
            a.setAttribute('href','Product_page.html?name=Колумбия Киндио')
            a.querySelector("#img").setAttribute('src','img/third_img.png')
            a.querySelector('#p').innerHTML = "Колумбия Киндио";

            a = document.querySelector('#all3')
            a.setAttribute('href','Product_page.html?name=Коста Рика Таррасу')
            a.querySelector("#img").setAttribute('src','img/third_img.png')
            a.querySelector('#p').innerHTML = "Коста Рика Таррасу";

            a = document.querySelector('#all4')
            a.setAttribute('href','Product_page.html?name=Минас-Жерайс')
            a.querySelector("#img").setAttribute('src','img/third_img.png')
            a.querySelector('#p').innerHTML = "Минас-Жерайс";

            a = document.querySelector('#all5')
            a.setAttribute('href','Product_page.html?name=Эфиопия Анасора')
            a.querySelector("#img").setAttribute('src','img/third_img.png')
            a.querySelector('#p').innerHTML = "Эфиопия Анасора";

            a = document.querySelector('#all6')
            a.setAttribute('href','Product_page.html?name=Колумбия Киндио')
            a.querySelector("#img").setAttribute('src','img/third_img.png')
            a.querySelector('#p').innerHTML = "Колумбия Киндио";

        }
    })
}

let name = (new URL(document.URL)).searchParams.get('name');
load(name);