$(document).ready(function() {
    $('#fullpage').fullpage({
        scrollingSpeed: 400,
    });
    menu: '#navigation';

});
let burger = document.querySelector('.burger');
let x = document.querySelector('.x');
let menuItem = document.querySelectorAll('.menu-item');
function clickBurger(){
    document.querySelector('.burger-menu').classList.toggle('open');
    burger.classList.toggle('close');
}

burger.addEventListener('click', clickBurger);
x.addEventListener('click', clickBurger);
menuItem.forEach(el=>{
    el.addEventListener('click', clickBurger);
})
