const login = document.querySelector('.link-login');
const loginPopup = document.querySelector('.modal-login');
const closeLoginPopup = loginPopup.querySelector('.modal-close');
const innerLogin = loginPopup.querySelector('#inner-login');
const innerPassword = loginPopup.querySelector('#inner-password');

const mapModal = document.querySelector('.modal-map');
const mapClose = mapModal.querySelector('.modal-close');
const howFind = document.querySelector('.contacts-button-map');

const modals = document.querySelectorAll('.modal');
const loginForm = loginPopup.querySelector('form');



// ______________________________________________________Проверяем работает ли Local Storage на данном устройстве или браузере.

let isStorageSupport = true;
let storage = '';

try{
	storage = localStorage.getItem('login');
}catch (err){
	isStorageSupport = false;
}

// ______________________________________________________________________________________________________





login.addEventListener('click', function(evt){
	evt.preventDefault();
	loginPopup.classList.remove('hidden');
	innerLogin.focus();
	if(storage){
		innerLogin.value = storage;
		innerPassword.focus();
	}else{
		innerLogin.focus();
	}
	
});

closeLoginPopup.addEventListener('click', function(){
	loginPopup.classList.add('hidden');
	loginPopup.classList.remove('modal-error');
	innerLogin.value = '';
});

howFind.addEventListener('click', function(evt){
	evt.preventDefault();
	mapModal.classList.remove('hidden');
});

mapClose.addEventListener('click', function(){
	mapModal.classList.add('hidden');
});

loginForm.addEventListener('submit', function(evt){
	if(!innerLogin.value || !innerPassword.value){
		evt.preventDefault();
		loginPopup.classList.add('modal-error');
	}else{
		if(isStorageSupport){
			localStorage.setItem('login',innerLogin.value);
		}
	}
})

window.addEventListener('keydown', function(evt){
	if(evt.keyCode === 27){
		for(i=0; i<modals.length; i++){
			modals[i].classList.add('hidden');
		}
	}
})