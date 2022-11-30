export function renderTestimonyCards(array) {
  const ul = document.querySelector('#testimonyList')
  array.forEach(element => {
    const card = createTestimonyCard(element)
    ul.appendChild(card)
  })
}

function createTestimonyCard(obj) {
  const li = document.createElement('li')
  li.classList.add('testimony', 'flex', 'col', 'gap-2')

  const elementTitle = document.createElement('p')

  const quote = document.createElement('q')
  quote.classList.add('title-5')
  quote.innerText = `\x22${obj.title}\x22`

  const elementDescription = document.createElement('p')
  elementDescription.innerText = `${obj.description}`

  elementTitle.appendChild(quote)
  li.append(elementTitle, elementDescription)

  return li
}

export function renderServiceCards(array) {
  const ul = document.querySelector('.service-list')
  array.forEach(element => {
    const card = createServiceCard(element)
    ul.appendChild(card)
  })
}

function createServiceCard(obj) {
  const li = document.createElement('li')

  const divCard = document.createElement('div')
  divCard.classList.add('card')

  const divIcon = document.createElement('div')
  divIcon.classList.add('icon')

  const icon = document.createElement('img')
  icon.src = `${obj.img}`

  const cardTitle = document.createElement('h2')
  cardTitle.classList.add('title-4')
  cardTitle.innerText = `${obj.title}`

  const cardDescription = document.createElement('span')
  cardDescription.innerText = `${obj.description}`

  divIcon.appendChild(icon)
  divCard.append(divIcon, cardTitle, cardDescription)
  li.appendChild(divCard)

  return li
}
