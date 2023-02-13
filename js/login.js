const loginForm = document.querySelector('#login-form');

function hide(){
    let modalOverlay = document.querySelector('.modal-overlay ');
    let modals = document.querySelectorAll('.modal');

    modalOverlay.classList.remove('modal-overlay--visible');
    modals.forEach((el) => {
        el.classList.remove('modal--visible');
    });
}

loginForm.addEventListener('submit', e => {
    e.preventDefault();
    const loginEmail = loginForm['email'].value.trim();
    const loginPassword = loginForm['password'].value.trim();

    if (loginEmail !== '' && loginPassword !== ''){
        auth.signInWithEmailAndPassword(loginEmail, loginPassword).then(() =>
            hide()
        ).catch(err => {
            if (err.code === 'auth/user-not-found'){
                //ВЫВЕСТИ ЧТО ПОЛЬЗОВАТЕЛЬ НЕ НАЙДЕН
                alert('Пользователя с такими данными не существует');
            }
            else{
                console.log(err.message);
            }
        })
    }
})

var button_login = document.createElement('button');
var button_lk = document.createElement('a');

const head_par = document.querySelector(".head_autz");

button_login.className = "btn-popup";
button_login.setAttribute("id", "log_btn");
button_login.setAttribute("data-path", "form-popup");
button_login.innerHTML = "ВойтИ";

button_lk.className = "user-link-login";
button_lk.setAttribute("href", "Personal_Area.html");
button_lk.setAttribute("id", "log_btn");
button_lk.innerHTML = "Личный кабинеТ";
