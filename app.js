                                // *******CHANGE HEADER BACKGROUND*********
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
                                //*************SWIPER STUFF************************
let swiper = new Swiper(".mySwiper", {
spaceBetween: 121,//32,
 grabCursor: true,
 centeredSlides: true,
  slidesPerView: 'auto',
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
   prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    1024: {
      spaceBetween: 70,
    },
  },
  });
  //**********SCROLL SECTIONS AND ACTIVE LINKS */
  const sections = document.querySelectorAll('section[id]')
    
  const scrollActive = () =>{
      const scrollDown = window.scrollY
  
    sections.forEach(current =>{
      const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute('id'),
          sectionsClass = document.querySelector('.menu a[href*=' + sectionId + ']')
  
      if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
        sectionsClass.classList.add('active-link')
      }else{
        sectionsClass.classList.remove('active-link')
      }                                                    
    })
  }
  window.addEventListener('scroll', scrollActive)
  //show scroll
  const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
      // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
  }
  window.addEventListener('scroll', scrollUp)

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-fill' : 'ri-sun-line'
