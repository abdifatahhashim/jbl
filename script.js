/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav--menu'),
      navToggle =document.getElementById('nav--toggle'),
      navClose = document.getElementById('nav--close') 
      
    //==menu show===
    // Validate if constant exists
    if(navToggle){
        navToggle.addEventListener('click', () =>{
            navMenu.classList.add('show-menu')
        })
    }
// ===Menu Hidden====
// validate if constant exists

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}






/*=============== REMOVE MENU MOBILE ===============*/


/*=============== ADD BLUR HEADER ===============*/


/*=============== SWIPER FAVORITES ===============*/ 


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/