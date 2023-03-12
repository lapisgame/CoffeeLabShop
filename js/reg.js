const signupForm = document.querySelector("#signup-form"); //ФОРМА РЕГИСТРАЦИИ

signupForm['email'].addEventListener('change', e => {
    e.style = 'background-color: red';
})

function hide() {
    let modalOverlay = document.querySelector('.modal-overlay ');
    let modals = document.querySelectorAll('.modal');

    modalOverlay.classList.remove('modal-overlay--visible');
    modals.forEach((el) => {
        el.classList.remove('modal--visible');
    });
}

signupForm.addEventListener('submit', e => {
    e.preventDefault();
    const email = signupForm['email'].value.trim();
    const pass1 = signupForm['password1'].value.trim();
    const pass2 = signupForm['password2'].value.trim();

    if (pass1 !== '' && pass2 !== '' && pass1 === pass2) {
        auth.createUserWithEmailAndPassword(email, pass1).then(cred => {
            return db.collection('users').doc(cred.user.uid).set({
                email,
                password: pass1,
                phone: "",
                addres: ""
            }).then(() => {
                hide();

                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: 'Регистрация прошла успешно',
                    showConfirmButton: false,
                    timer: 1500
                })
                localStorage.setItem('flagLogin', true);
                localStorage.setItem('coffeeLoginEmail', email);
                localStorage.setItem('coffeeLoginPassword', pass1);
                signupForm.reset();
            }).catch(err => {
                if (err.code === 'auth/email-already-in-use') {
                    Swal.fire({
                        icon: 'error',
                        title: 'Ошибка',
                        text: 'Пользователь с такой почтой уже существует'
                    })
                }
                else {
                    console.log(err.message);
                }
            })
        }).catch(err => {
            if (err.code === 'auth/email-already-in-use') {
                Swal.fire({
                    icon: 'error',
                    title: 'Ошибка',
                    text: 'Пользователь с такой почтой уже существует'
                })
            }
            else {
                console.log(err.message);
            }
        })
    }
})