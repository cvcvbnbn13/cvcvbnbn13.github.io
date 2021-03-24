const navMenu = document.getElementById('nav__menu'),
      toggleMenu = document.getElementById('nav__toggle'),
      closeMenu = document.getElementById('nav__close')

toggleMenu.addEventListener('click', ()=>{
  navMenu.classList.toggle('nav__show')
})

closeMenu.addEventListener('click', ()=>{
  navMenu.classList.remove('nav__show')
})


const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
  navMenu.classList.remove('nav__show')
}
navLink.forEach((n)=>{
  n.addEventListener('click',linkAction)
})

const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
  const scrollY = window.pageYOffset

  sections.forEach((n)=>{
    const sectionH = n.offsetHeight
    const sectionTop = n.offsetTop - 50
    const sectionId = n.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionH){
      document.querySelector(`.nav__menu a[href*= ${sectionId}]`).classList.add('nav__active')
    }else{
      document.querySelector(`.nav__menu a[href*= ${sectionId}]`).classList.remove('nav__active')
    }
  })
}