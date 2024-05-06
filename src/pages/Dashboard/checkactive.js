const activepage = window.location.pathname;
const navLinks = document.querySelectorAll('.side-menu').forEach(link =>{
    if(link.href.includes(`${activepage}`)){
        link.classList.add('active');
    }
})