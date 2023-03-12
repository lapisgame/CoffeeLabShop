function drawMix() {
    let a = document.querySelector('#all1')
    a.setAttribute('href', 'Product_page.html?name=Arpeggio')
    a.querySelector("#img").setAttribute('src', 'img/first_img.png')
    a.querySelector('#p').innerHTML = "Arpeggio";

    a = document.querySelector('#all2')
    a.setAttribute('href', 'Product_page.html?name=Capriccio')
    a.querySelector("#img").setAttribute('src', 'img/first_img.png')
    a.querySelector('#p').innerHTML = "Capriccio";

    a = document.querySelector('#all3')
    a.setAttribute('href', 'Product_page.html?name=Esperanza')
    a.querySelector("#img").setAttribute('src', 'img/first_img.png')
    a.querySelector('#p').innerHTML = "Esperanza";

    a = document.querySelector('#all4')
    a.setAttribute('href', 'Product_page.html?name=Fugace')
    a.querySelector("#img").setAttribute('src', 'img/first_img.png')
    a.querySelector('#p').innerHTML = "Fugace";

    a = document.querySelector('#all5')
    a.setAttribute('href', 'Product_page.html?name=Милано')
    a.querySelector("#img").setAttribute('src', 'img/first_img.png')
    a.querySelector('#p').innerHTML = "Милано";

    a = document.querySelector('#all6')
    a.setAttribute('href', 'Product_page.html?name=Портофино')
    a.querySelector("#img").setAttribute('src', 'img/first_img.png')
    a.querySelector('#p').innerHTML = "Портофино";

}
function drawMono() {
    let a = document.querySelector('#all1')
    a.setAttribute('href', 'Product_page.html?name=Бразилия')
    a.querySelector("#img").setAttribute('src', 'img/second_img.png')
    a.querySelector('#p').innerHTML = "Бразилия";

    a = document.querySelector('#all2')
    a.setAttribute('href', 'Product_page.html?name=Гватемала')
    a.querySelector("#img").setAttribute('src', 'img/second_img.png')
    a.querySelector('#p').innerHTML = "Гватемала";

    a = document.querySelector('#all3')
    a.setAttribute('href', 'Product_page.html?name=Колумбия')
    a.querySelector("#img").setAttribute('src', 'img/second_img.png')
    a.querySelector('#p').innerHTML = "Колумбия";

    a = document.querySelector('#all4')
    a.setAttribute('href', 'Product_page.html?name=Коста Рика')
    a.querySelector("#img").setAttribute('src', 'img/second_img.png')
    a.querySelector('#p').innerHTML = "Коста Рика";

    a = document.querySelector('#all5')
    a.setAttribute('href', 'Product_page.html?name=Куба')
    a.querySelector("#img").setAttribute('src', 'img/second_img.png')
    a.querySelector('#p').innerHTML = "Куба";

    a = document.querySelector('#all6')
    a.setAttribute('href', 'Product_page.html?name=Эфиопия')
    a.querySelector("#img").setAttribute('src', 'img/second_img.png')
    a.querySelector('#p').innerHTML = "Эфиопия";
}
function drawSpec() {
    let a = document.querySelector('#all1')
    a.setAttribute('href', 'Product_page.html?name=Кения Киамбу АВ')
    a.querySelector("#img").setAttribute('src', 'img/third_img.png')
    a.querySelector('#p').innerHTML = "Кения Киамбу АВ";

    a = document.querySelector('#all2')
    a.setAttribute('href', 'Product_page.html?name=Колумбия Киндио')
    a.querySelector("#img").setAttribute('src', 'img/third_img.png')
    a.querySelector('#p').innerHTML = "Колумбия Киндио";

    a = document.querySelector('#all3')
    a.setAttribute('href', 'Product_page.html?name=Коста Рика Таррасу')
    a.querySelector("#img").setAttribute('src', 'img/third_img.png')
    a.querySelector('#p').innerHTML = "Коста Рика Таррасу";

    a = document.querySelector('#all4')
    a.setAttribute('href', 'Product_page.html?name=Минас-Жерайс')
    a.querySelector("#img").setAttribute('src', 'img/third_img.png')
    a.querySelector('#p').innerHTML = "Минас-Жерайс";

    a = document.querySelector('#all5')
    a.setAttribute('href', 'Product_page.html?name=Эфиопия Анасора')
    a.querySelector("#img").setAttribute('src', 'img/third_img.png')
    a.querySelector('#p').innerHTML = "Эфиопия Анасора";

    a = document.querySelector('#all6')
    a.setAttribute('href', 'Product_page.html?name=Колумбия Киндио')
    a.querySelector("#img").setAttribute('src', 'img/third_img.png')
    a.querySelector('#p').innerHTML = "Колумбия Киндио";
}

function preload() {
    Swal.fire({
        position: 'center',
        icon: 'info',
        title: 'Загружаем данные',
        showConfirmButton: false,
        timer: 2000
    })
}

function load(name) {
    preload();
    db.collection('Prod').doc(name).get().then((el) => {
        document.querySelector('#name_main').innerHTML = el.data().Name;
        document.querySelector('#img_main').setAttribute('src', `img/${el.data().Image}.png`);
        document.querySelector('#discription1').innerHTML = el.data().Discription;
        document.querySelector('#bread2').innerHTML = el.data().Name;
        document.querySelector('#bread1').setAttribute('href', `catalog.html?page=1&type=${el.data().Type}`);
        document.querySelector('#stars_main').setAttribute('src', `img/Bottom-page/${el.data().Stars}_stars.svg`);
        document.querySelector('#price_main').innerHTML = el.data().Price + ' руб';

        if (el.data().Type === "mix") {
            drawMix();

            document.querySelector('#short1').innerHTML = `Состав: ${el.data().Compound}`;
            document.querySelector('#short2').innerHTML = `Помол: ${el.data().Grinding}`;
            document.querySelector('#discription2').innerHTML = el.data().Discription2;

            let par = document.querySelector('#par1');
            let par_prog = document.querySelector('#par1_prog');
            par.innerHTML = "Горчинка";
            par_prog.setAttribute('value', el.data().Bitterness);

            par = document.querySelector('#par2');
            par_prog = document.querySelector('#par2_prog');
            par.innerHTML = "Плотность";
            par_prog.setAttribute('value', el.data().Density);

            par = document.querySelector('#par3');
            par_prog = document.querySelector('#par3_prog');
            par.innerHTML = "Кислотность";
            par_prog.setAttribute('value', el.data().Acidity);
        }
        else if (el.data().Type === "mono") {
            drawMono();

            document.querySelector('#short1').innerHTML = `Аромат: ${el.data().Smell}`
            document.querySelector('#short2').innerHTML = `Вкус: ${el.data().Taste}`
            document.querySelector('#discription2').innerHTML = el.data().Discription2;

            let par = document.querySelector('#par1');
            let par_prog = document.querySelector('#par1_prog');
            par.innerHTML = "Горчинка"
            par_prog.setAttribute('value', el.data().Bitterness);

            par = document.querySelector('#par2');
            par_prog = document.querySelector('#par2_prog');
            par.innerHTML = "Плотность"
            par_prog.setAttribute('value', el.data().Density);

            par = document.querySelector('#par3');
            par_prog = document.querySelector('#par3_prog');
            par.innerHTML = "Кислотность"
            par_prog.setAttribute('value', el.data().Acidity)
        }
        else {
            drawSpec();

            document.querySelector('#short1').innerHTML = `Вкус: ${el.data().Taste}`
            document.querySelector('#short2').innerHTML = `Оценка Q-грейдера: ${el.data().Q} SCA`

            let par = document.querySelector('#par1');
            let par_prog = document.querySelector('#par1_prog');
            par.innerHTML = "Сладость"
            par_prog.setAttribute('value', el.data().Sweetness);

            par = document.querySelector('#par2');
            par_prog = document.querySelector('#par2_prog');
            par.innerHTML = "Плотность"
            par_prog.setAttribute('value', el.data().Density);

            par = document.querySelector('#par3');
            par_prog = document.querySelector('#par3_prog');
            par.innerHTML = "Кислотность"
            par_prog.setAttribute('value', el.data().Acidity)
        }


    })
}

let name = (new URL(document.URL)).searchParams.get('name');
load(name);