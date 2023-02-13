const signupForm = document.querySelector("#signup-form"); //ФОРМА РЕГИСТРАЦИИ

signupForm['email'].addEventListener('change', e=>{
    e.style = 'background-color: red';
})

signupForm.addEventListener('submit', e=> {
    e.preventDefault();
    const email = signupForm['email'].value.trim();
    const pass1 = signupForm['password1'].value.trim();
    const pass2 = signupForm['password2'].value.trim();

    if (pass1 !== '' && pass2 !== '' && pass1 === pass2){
        alert('Pass ok');
        auth.createUserWithEmailAndPassword(email,pass1).then(cred => {
            return db.collection('users').doc(cred.user.uid).set({
                email, pass1
            }).then(() => {
                signupForm.reset();
                //ПЕРЕНАПРАВЛЕНИЕ НА ФОРМУ ЛОГИНА
                alert("REG OK");
            }).catch(err => {
                if (err.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }
                else{
                    console.log(err.message);
                }
            })
        }).catch(err => {
            console.log(err.message);
        })
    }   
})