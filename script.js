const menuBtn = document.getElementById('menuBtn')
const navList = document.getElementById('navList')
const links = navList.querySelectorAll('a')
const menuNav = document.getElementById('menuNav')
const menuButtons = menuNav.querySelectorAll('.btn')
const menuContainer = document.getElementById('menuContainer')
menuBtn.addEventListener('click', () => {

    if (menuBtn.classList.contains('ri-menu-3-line')) {
        menuBtn.classList.replace('ri-menu-3-line', 'ri-close-line')
        navList.style.right = "0"
        document.body.style.overflow = "hidden"
    } else {
        menuBtn.classList.replace('ri-close-line', 'ri-menu-3-line')
        navList.style.right = "-100%"
        document.body.style.overflow = "scroll"
    }
})

links.forEach((link) => {
    link.addEventListener('click', () => {
        menuBtn.classList.replace('ri-close-line', 'ri-menu-3-line')
        navList.style.right = "-100%"
        document.body.style.overflow = "scroll"
    })
})

menuButtons.forEach((button) => {

    button.addEventListener('click', () => {
        menuButtons.forEach((btn) => {
            btn.classList.remove('active-menu')
        })
        button.classList.add('active-menu')
        menuContainer.classList.toggle('aos-animate')
        setTimeout(function () {
            menuContainer.classList.add('aos-animate');
        }, 400);
    })


})

const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 3, 
    spaceBetween: 30,
    autoplay: {
        delay: 2000, 
    },
    
    // Other Swiper options...
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    
    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
 

  
    
  });


