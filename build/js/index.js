const menuIcon = document.querySelector('.bars-menu');

menuIcon.addEventListener('click',()=>{
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
})

const links = document.querySelectorAll('.menu-link');
links.forEach(link =>{
    link.addEventListener('click',()=>{
        const menu = document.querySelector('.menu');
        menu.classList.toggle('active');  
    })
})
