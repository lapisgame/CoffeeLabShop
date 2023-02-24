const btng = document.querySelectorAll('.btng');
const btnz = document.querySelectorAll('.btnz');
const modaliOverlay = document.querySelector('.modali-overlay ');
const modali = document.querySelectorAll('.modali');
const closebb = document.querySelectorAll('.modal-close')

btnz.forEach((el) => {
	el.addEventListener('click', (e) => {
		let path = e.currentTarget.getAttribute('data-path');

		modali.forEach((el) => {
			el.classList.remove('modali--visible');
		});

		document.querySelector(`[data-target="${path}"]`).classList.add('modali--visible');
		modaliOverlay.classList.add('modali-overlay--visible');
	});
});

btng.forEach((ell) => {
	ell.addEventListener('click', (e) => {
		let path = e.currentTarget.getAttribute('data-path');

		modali.forEach((ell) => {
			ell.classList.remove('modali--visible');
		});

		document.querySelector(`[data-target="${path}"]`).classList.add('modali--visible');
		modaliOverlay.classList.add('modali-overlay--visible');
	});
});


modaliOverlay.addEventListener('click', (e) => {
	console.log(e.target);

	if (e.target == modaliOverlay) {
		modaliOverlay.classList.remove('modali-overlay--visible');
		modali.forEach((el) => {
			el.classList.remove('modali--visible');
		});
	}
});


closebb.forEach((elll) => {
	elll.addEventListener('click', (e) => {

		if (closebb) {
			modaliOverlay.classList.remove('modali-overlay--visible');
			modali.forEach((el) => {
				el.classList.remove('modali--visible');
			});
		}
	});
});





