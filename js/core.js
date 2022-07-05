const login = document.querySelector('.link-login');
const loginPopup = document.querySelector('.modal-login');
const closeLoginPopup = loginPopup.querySelector('.modal-close');
const innerLogin = loginPopup.querySelector('#inner-login');

const mapModal = document.querySelector('.modal-map');
const mapClose = mapModal.querySelector('.modal-close');
const howFind = document.querySelector('.contacts-button-map');

login.addEventListener('click', function(evt){
	evt.preventDefault();
	loginPopup.classList.remove('hidden');
	innerLogin.focus();
});

closeLoginPopup.addEventListener('click', function(){
	loginPopup.classList.add('hidden');
	innerLogin.value = '';
});

howFind.addEventListener('click', function(evt){
	evt.preventDefault();
	mapModal.classList.remove('hidden');
});

mapClose.addEventListener('click', function(){
	mapModal.classList.add('hidden');
});