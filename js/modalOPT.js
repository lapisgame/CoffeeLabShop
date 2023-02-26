const btng = document.querySelector('.btng');
const btnz = document.querySelector('.btnz');
const modaliOverlay = document.querySelector('.modali-overlay ');
const modali = document.querySelectorAll('.modali');
const closebb = document.querySelector('.modali-close')

const OPTForm = document.querySelector("#OPT-form");
OPTForm.reset();

btnz.addEventListener('click', (e) => {
	e.preventDefault();
	email = OPTForm['email'].value;
	Name = OPTForm['Name'].value;
	Phone = OPTForm['Phone'].value;

	if (email !== "" && Name !== "" && Phone !== "") {
		let path = e.currentTarget.getAttribute('data-path');

		modali.forEach((el) => {
			el.classList.remove('modali--visible');
		});

		document.querySelector(`[data-target="${path}"]`).classList.add('modali--visible');
		modaliOverlay.classList.add('modali-overlay--visible');

		OPTForm.reset();
	}else{
		Swal.fire({
			icon: 'error',
			title: 'Ошибка',
			text: 'Введите корректные данные для связи',
			showConfirmButton: false,
            timer: 1500
		})
	}
});

btng.addEventListener('click', (e) => {
	let path = e.currentTarget.getAttribute('data-path');

	modali.forEach((ell) => {
		ell.classList.remove('modali--visible');
	});

	document.querySelector(`[data-target="${path}"]`).classList.add('modali--visible');
	modaliOverlay.classList.add('modali-overlay--visible');
});



modaliOverlay.addEventListener('click', (e) => {
	if (e.target == modaliOverlay) {
		modaliOverlay.classList.remove('modali-overlay--visible');
		modali.forEach((el) => {
			el.classList.remove('modali--visible');
		});
	}
});


closebb.addEventListener('click', (e) => {
	if (closebb) {
		modaliOverlay.classList.remove('modali-overlay--visible');
		modali.forEach((el) => {
			el.classList.remove('modali--visible');
		});
	}
});






