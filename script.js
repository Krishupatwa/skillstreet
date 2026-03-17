const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnpopup = document.querySelector('.btnlogin-popup');
const iconclose = document.querySelector('.icon-close');
const alertbox = document.querySelector('.alert-box');
const profileBox = document.querySelector('.profile-box');
const avatarCircle = document.querySelector('.avatar-circle');




registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnpopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconclose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});

avatarCircle.addEventListener('click', () => profileBox.classList.toggle('show'));

setTimeout(() => alertbox.classList.add('show'),50);

setTimeout(() => {
    alertbox.classList.remove('show');
    setTimeout(() => alertbox.remove(),1000);
},6000);




