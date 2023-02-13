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
                console.log(err.message);
            }
        })
    }
  
    auth.onAuthStateChanged((user) => {
        if (user) {
            document.querySelector('body').innerHTML += "<p>LOGIN</p>"
        }
    });
})