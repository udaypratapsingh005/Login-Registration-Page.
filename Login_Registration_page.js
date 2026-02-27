const wrapper = document.querySelector('.wrapper');
const login = document.querySelectorAll('#login')
const regiter = document.querySelector('#register')
const reglink = document.querySelector(".register-link");
const loginlink = document.querySelector('.login-link');
const btnPopup = document.querySelector('.login-btn')
const closebtn = document.querySelector('.icon-closed')



loginlink.addEventListener('click',() =>{
    wrapper.classList.remove('active')
})

reglink.addEventListener('click',() =>{
    wrapper.classList.add('active')
})

btnPopup.addEventListener('click',() =>{
    wrapper.classList.add('active-popup')
})

closebtn.addEventListener('click',() =>{
    wrapper.classList.remove('active-popup')
})