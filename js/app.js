const openMenu = document.querySelector('.header__menu');
const navbarMenu = document.querySelector('.navbar');
const closeMenu = document.querySelector('.navbar__menu');

openMenu.addEventListener('click', () => {
    document.body.classList.add('menu-active');
    navbarMenu.classList.add('active');
});

closeMenu.addEventListener('click', () => {
    document.body.classList.remove('menu-active');
    navbarMenu.classList.remove('active');
});

document.addEventListener('click', e => {
    if(!navbarMenu.contains(e.target) && ( !e.target.classList.contains('header__icon') && !e.target.classList.contains('header__menu'))){
        document.body.classList.remove('menu-active');
        navbarMenu.classList.remove('active');
    }
});

window.addEventListener('resize', () => {
    if(window.screen.width > 650){
        document.body.classList.remove('menu-active');
        navbarMenu.classList.remove('active');
    }
});
