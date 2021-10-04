const nav=document.querySelector('.top-nav');
window.addEventListener('scroll',()=>{
    if(window.scrollY >=100) {
        nav.classList.add('nav-black')
    }
    else{
        nav.classList.remove('nav-black')
    }
})