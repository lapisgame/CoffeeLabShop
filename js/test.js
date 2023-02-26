const form = document.querySelector("#createProduct")

form.addEventListener('submit', e=>{
    e.preventDefault();
    saveData();
})

function saveData(){
    const Name = form['name'].value;
    const Bitterness = form['bitterness'].value;
    const Density = form['density'].value;
    const Acidity = form['acidity'].value;
    const Discription = form['discription1'].value;
    const Discription2 = form['discription2'].value;
    const Image = form['image'].value;
    const Grinding = form['grinding'].value;
    const Price = form['price'].value;
    const Compound = form['compound'].value;
    const Recomendation = form['recomendation'].value;
    const Stars = form['stars'].value;
    const Country = form['country'].value;

    return db.collection('Prod').doc(Name).set({
        Name,
        Bitterness,
        Density,
        Acidity,
        Discription,
        Discription2,
        Image,
        Grinding,
        Price,
        Compound,
        Recomendation,
        Stars,
        Country
    }).then(() => {
        form.reset();
        Swal.fire({
            icon: 'success',
            title: 'Ок',
            showConfirmButton: false,
            timer: 1000
        })
    }).catch(() => {
        Swal.fire({
            icon: 'error',
            title: 'Не ок'
        })
    })
}

function drawProducts(name){
    let box = document.querySelector("#boxberry");

    let block = document.createElement('div')
    block.className = "block"
    
    let b1 = document.createElement('div')
    b1.className = "row1"
    let b2 = document.createElement('div')
    b1.className = "row2"

    let h2Row = document.createElement('h2')
    h2Row.setAttribute("id", "nameRow")
    let dis = document.createElement('p')
    dis.setAttribute("id", "dis")

    let mb1 = document.createElement('div')
    mb1.className = "miniBlock"
    mb1.setAttribute("id", "r1")
    let mb2 = document.createElement('div')
    mb2.className = "miniBlock"
    mb2.setAttribute("id", "r2")
    let mb3 = document.createElement('div')
    mb3.className = "miniBlock"
    mb3.setAttribute("id", "r3")


    db.collection('Prod').doc(name).get().then(doc => {
        h2Row.innerHTML = (doc.data().name);
        dis.innerHTML = (doc.data().dis);

        mb1.innerHTML = (doc.data().par1);
        mb2.innerHTML = (doc.data().par2);
        mb3.innerHTML = (doc.data().par3);

        b1.appendChild(h2Row)
        b1.appendChild(dis)

        b2.appendChild(mb1)
        b2.appendChild(mb2)
        b2.appendChild(mb3)

        block.appendChild(b1);
        block.appendChild(b2);

        box.appendChild(block);
    })
}

