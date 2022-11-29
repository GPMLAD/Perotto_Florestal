import { renderServiceCards, renderTestimonyCards } from './createCards.js'
import { dataServices, dataTestimony } from './data.js'
import { dropDown } from './dropDown.js'

const buttonMenu = document.querySelector('.openMenuDD')
buttonMenu.addEventListener('click', () => {
  dropDown()
})

document.querySelector('#whatsapp').addEventListener('click', () => {
  window.open(
    'https://wa.me/5541996410628?text=Olá, vi seu site e estou entrando em contato para mais informações, você poderia me ajudar?',
    '_blank'
  )
})

document.querySelector('#facebook').addEventListener('click', () => {
  window.open(
    'https://www.facebook.com/profile.php?id=100087565187658',
    '_blank'
  )
})

document.querySelector('#instagram').addEventListener('click', () => {
  window.open('https://www.instagram.com/perottoflorestal/', '_blank')
})

document.querySelector('#mail').addEventListener('click', () => {
  window.open('mailto:perotto.florestal@hotmail.com', '_blank')
})

renderServiceCards(dataServices)
renderTestimonyCards(dataTestimony)

ScrollReveal().reveal(
  `header,main,section,footer,div,p,h1,h2,h3,img,button,ul,li,span,q
`,
  { delay: 500 }
)
