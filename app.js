const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');
const navLink = document.querySelector('.nav-link');

hamburger.addEventListener('click' , () => {
    hamburger.classList.toggle('active')
    navList.classList.toggle('active')
 })

navLink.forEach(n => n.addEventListener('click',() => {
    hamburger.classList.remove('active')
    navList.classList.remove('active')
}))