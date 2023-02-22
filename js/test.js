let btn = document.querySelector(".btn");

let num = ""
db.collection('Prod').doc("ProdNames").get().then((docs) => {
    for (num in docs.data()){
        console.log(num);
    }
}).then(() => {
    document.querySelector("#createProduct").addEventListener('submit', e=>{
        e.preventDefault();
        saveData(num);
    })
    
    document.querySelector("#draw").addEventListener('submit', e=>{
        e.preventDefault();
        drawProducts(document.querySelector("#nameDraw").value);
    })
})

const form = document.querySelector("#createProduct")

btn.addEventListener('click', e => {
    e.preventDefault();
    return db.collection('test').doc("1").set({
        test: "Test"
    }).then(() => {
        Swal.fire({
            icon: 'success',
            title: 'Ок',
        })
    }).catch(() => {
        Swal.fire({
            icon: 'error',
            title: 'Не ок'
        })
    })
})

function saveData(number){
    const form = document.querySelector("#createProduct")

    const name = form['name'].value;
    const dis = form['discription'].value;
    const par1 = form['par1'].value;
    const par2 = form['par2'].value;
    const par3 = form['par3'].value;


    let newnum = String(Number(number) + 1)

    return db.collection('Prod').doc(name).set({
        name,
        dis,
        par1,
        par2,
        par3
    }).then(() => {
        console.log(newnum);
        db.collection('ProdNames').doc(newnum).set({
            name
        })
    }).then(() => {
        Swal.fire({
            icon: 'success',
            title: 'Ок',
        })
    }).then(() => {
        drawProducts();
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

