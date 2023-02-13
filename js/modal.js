let btns
let modalOverlay = document.querySelector('.modal-overlay ');
let modals = document.querySelectorAll('.modal');

var button_login = document.createElement('button');
var button_lk = document.createElement('a');
var button_out = document.createElement('button');

button_lk.className = "user-link-login";
button_lk.setAttribute("href", "Personal_Area.html");
button_lk.setAttribute("id", "log_btn");
button_login.setAttribute("attribute_flag", "rem");
button_lk.innerHTML = "Личный кабинеТ";

button_login.className = "btn-popup";
button_login.setAttribute("id", "log_btn");
button_login.setAttribute("attribute_flag", "rem");
button_login.setAttribute("data-path", "form-popup");
button_login.innerHTML = "ВОЙТИ";

button_out.className = "btn_out btn-popup";
button_login.setAttribute("attribute_flag", "rem");
button_out.innerHTML = "ВЫЙТИ";
button_out.style = "margin-left: 15px"

auth.onAuthStateChanged((user) => {
    if (user) {
        document.querySelectorAll('[attribute_flag = "rem"]').forEach(e => {
			e.remove();
		});
        document.querySelector(".head_autz").appendChild(button_lk);
		document.querySelector(".head_autz").appendChild(button_out);
		var btn_out = document.querySelector(".btn_out");

		btn_out.addEventListener('click', e => {
			e.preventDefault();
			auth.signOut();
		})
    }
    else{
        document.querySelectorAll('[attribute_flag = "rem"]').forEach(e => {
			e.remove();
		});
		if (document.querySelector(".btn_out") !== null){
			document.querySelector(".btn_out").remove();
		}
		
		if (document.querySelector("#log_btn") !== null){
			document.querySelector("#log_btn").remove();
		}

        document.querySelector(".head_autz").appendChild(button_login);
        btns = document.querySelector(".btn-popup")

		btns.addEventListener('click', (e) => {
			let path = e.currentTarget.getAttribute('data-path');
		
			modals.forEach((el) => {
				el.classList.remove('modal--visible');
			});
		
			document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
			modalOverlay.classList.add('modal-overlay--visible');
		});
    }
});

modalOverlay.addEventListener('click', (e) => {
	if (e.target == modalOverlay) {
		modalOverlay.classList.remove('modal-overlay--visible');
		modals.forEach((el) => {
			el.classList.remove('modal--visible');
		});
	}
});

var btns1 = document.querySelector(".btn111")

btns1.addEventListener('click', (e) => {
	let path = e.currentTarget.getAttribute('data-path');

	modals.forEach((el) => {
		el.classList.remove('modal--visible');
	});

	document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
	modalOverlay.classList.add('modal-overlay--visible');
});
// ДЛЯ ОТКРЫТИЯ МОДАЛКИ