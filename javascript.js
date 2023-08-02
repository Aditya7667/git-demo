burger = document.querySelector('.burger');
navbar = document.querySelector('.navigation');
rightnav = document.querySelector('.right');
navlist = document.querySelector('.navlist');


burger.addEventListener('click' , ()=>{
    rightnav.classList.toggle('v-resp');
    navlist.classList.toggle('v-resp');
    navbar.classList.toggle('h-resp')
})
