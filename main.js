/* abre e fecha o menu ao clicar no icone */

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* quando clicar em um item do menu, esconder o menu */

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* mudar o header da página quando der scroll */

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    /* scroll > header */
    header.classList.add('scroll')
  } else {
    /* scroll < header*/
    header.classList.remove('scroll')
  }
})

/* testimonials swiper */

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
})
