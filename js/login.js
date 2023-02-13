const loginForm = document.querySelector('#login-form');

loginForm.addEventListener('submit', e => {
    e.preventDefault();
    const loginEmail = loginForm['email'].value.trim();
    const loginPassword = loginForm['password'].value.trim();

    if (loginEmail !== '' && loginPassword !== ''){
        auth.signInWithEmailAndPassword(loginEmail, loginPassword).then(() =>
            //УСПЕШНОЕ СООБЩЕНИЕ И ЗАКРЫТЬ МОДАЛКУ
            alert('LOGIN OK')
        ).catch(err => {
            if (err.code === 'auth/user-not-found'){
                //ВЫВЕСТИ ЧТО ПОЛЬЗОВАТЕЛЬ НЕ НАЙДЕН
                alert('Пользователя НЕТ');
            }
            else{
                console.log("ERROR   " + err.message);
            }
        })
    }
})

let button_login = document.createElement('button');
let button_lk = document.createElement('a');

const head_par = document.querySelector(".head_autz");

button_login.className = "btn-popup";
button_login.setAttribute("id", "log_btn");
button_login.innerHTML = "Войти";

button_lk.className = "user-link-login";
button_lk.setAttribute("href", "Personal_Area.html");
button_lk.setAttribute("id", "log_btn");
button_lk.innerHTML = "Личный кабинет";

auth.onAuthStateChanged((user) => {
    if (user) {
        document.querySelector(".head_autz").lastChild.remove();
        document.querySelector(".head_autz").appendChild(button_lk);
    }
    else{
        document.querySelector(".head_autz").lastChild.remove();
        document.querySelector(".head_autz").appendChild(button_login);
    }
});