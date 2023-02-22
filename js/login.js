const loginForm = document.querySelector('#login-form');

function hide(){
    let modalOverlay = document.querySelector('.modal-overlay ');
    let modals = document.querySelectorAll('.modal');

    modalOverlay.classList.remove('modal-overlay--visible');
    modals.forEach((el) => {
        el.classList.remove('modal--visible');
    });
}

function loginWithEmailAndPassword(loginEmail, loginPassword, pushFlag){
    if (loginEmail !== '' && loginPassword !== ''){
        auth.signInWithEmailAndPassword(loginEmail, loginPassword).then(() => {
            hide();
            loginForm.reset();
            if (pushFlag){
                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: 'Авторизация прошла успешно',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
            localStorage.setItem('flagLogin', true);
            localStorage.setItem('coffeeLoginEmail', loginEmail);
            localStorage.setItem('coffeeLoginPassword', loginPassword);
            
        }).catch(err => {
            if (err.code === 'auth/user-not-found'){
                Swal.fire({
                    icon: 'error',
                    title: 'Ошибка',
                    text: 'Пользователя с такими данными не существует'
                })
                loginForm.reset();
            }
            else{
                console.log(err.message);
            }
        })
    }
}

function tryLoginFromLocalStogage(){
    if (localStorage.getItem('flagLogin')){
        loginWithEmailAndPassword(localStorage.getItem('coffeeLoginEmail'), localStorage.getItem('coffeeLoginPassword'), false);
    }
}

loginForm.addEventListener('submit', e => {
    e.preventDefault();
    const loginEmail = loginForm['email'].value.trim();
    const loginPassword = loginForm['password'].value.trim();

    loginWithEmailAndPassword(loginEmail, loginPassword, true);
})

tryLoginFromLocalStogage();
