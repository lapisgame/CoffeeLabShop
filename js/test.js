let btn = document.querySelector(".btn");
let uid

auth.onAuthStateChanged((user) => {
    uid = user.uid;
})

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