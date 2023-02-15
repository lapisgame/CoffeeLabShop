let btn = document.querySelector(".btn");

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

function saveData(){
    const form = document.querySelector("#createProduct")

    const name = form['name'].value;
    const dis = form['discription'].value;
    const par1 = form['par1'].value;
    const par2 = form['par2'].value;
    const par3 = form['par3'].value;

    return db.collection('Prod').doc(name).set({
        name,
        dis,
        par1,
        par2,
        par3
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
    db.collection('Prod').doc(name).get().then(doc => {
        document.querySelector('#nameRow').innerHTML = (doc.data().name);
        document.querySelector('#dis').innerHTML = (doc.data().dis);

        document.querySelector('#r1').innerHTML = (doc.data().par1);
        document.querySelector('#r2').innerHTML = (doc.data().par2);
        document.querySelector('#r3').innerHTML = (doc.data().par3);
    })
}

document.querySelector("#createProduct").addEventListener('submit', e=>{
    e.preventDefault();
    saveData();
})

document.querySelector("#draw").addEventListener('submit', e=>{
    e.preventDefault();
    drawProducts(document.querySelector("#nameDraw").value);
})