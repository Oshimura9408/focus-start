const btn = document.querySelector('.btn__order');
const modalWindow = document.querySelector('.modal');

btn.addEventListener('click', ()=>{
    modalWindow.classList.add('modal--opened');
})