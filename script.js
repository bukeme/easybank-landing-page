const menuIcons = document.querySelectorAll('.menu-icon');
const overlay = document.querySelector('.overlay');
const navLinkContainer = document.querySelector('.nav-link-container');



const toggleMenu = () => {
	menuIcons.forEach((icon) => {
		icon.classList.toggle('d-none');
		icon.classList.toggle('d-inline-block');
	});
	overlay.classList.toggle('active');
	navLinkContainer.classList.toggle('active');
}

menuIcons.forEach((icon) => {
	icon.addEventListener('click', toggleMenu);
});

overlay.addEventListener('click', toggleMenu)
