function scrollToSection(sectionID) {
  console.log('entrou na função')
  window.scrollBy(
    0,
    document.getElementById(sectionID).getBoundingClientRect().top -
      93
  )
}

export function dropDown() {
  const body = document.querySelector('body')
  body.classList.add('locked')

  const dropDownWrapper = document.createElement('div')
  dropDownWrapper.classList.add('dropDown-wrapper')

  const dropDownHeader = document.createElement('div')
  dropDownHeader.classList.add('dropDown-header')

  const dropDownLogo = document.createElement('div')
  dropDownLogo.classList.add(
    'container',
    'flex',
    'spaceBT',
    'alignCenter',
    'dropDown-logo'
  )

  const divLogo = document.createElement('div')
  divLogo.classList.add('logo')

  const logo = document.createElement('img')
  logo.src = './src/imgs/logoWhite.png'
  logo.alt = 'Perotto Florestal'

  const buttonClose = document.createElement('button')
  buttonClose.addEventListener('click', () => {
    body.classList.remove('locked')
    dropDownWrapper.remove()
  })

  const closeImg = document.createElement('img')
  closeImg.src = './src/imgs/Close.png'
  closeImg.alt = 'Fechar'

  const dropDownMenu = document.createElement('div')
  dropDownMenu.classList.add(
    'flex',
    'col',
    'alignCenter',
    'gap-1',
    'dropDown-menu'
  )

  const ulSections = document.createElement('ul')
  ulSections.classList.add('flex', 'col', 'alignCenter', 'gap-1')

  const resume = document.createElement('li')
  const resumeAnchor = document.createElement('a')
  resumeAnchor.setAttribute('onclick', 'event.preventDefault()')
  resumeAnchor.classList.add('title-4')
  resumeAnchor.href = '#'
  resumeAnchor.innerText = 'Início'
  resumeAnchor.addEventListener('click', () => {
    dropDownWrapper.remove()
    scrollToSection('init')
    body.classList.remove('locked')
  })
  resume.appendChild(resumeAnchor)

  const services = document.createElement('li')
  const servicesAnchor = document.createElement('a')
  servicesAnchor.setAttribute('onclick', 'event.preventDefault()')
  servicesAnchor.classList.add('title-4')
  servicesAnchor.href = '#'
  servicesAnchor.innerText = 'Serviços'
  servicesAnchor.addEventListener('click', e => {
    e.preventDefault()
    dropDownWrapper.remove()
    scrollToSection('services')
    body.classList.remove('locked')
  })
  services.appendChild(servicesAnchor)

  const testimony = document.createElement('li')
  const testimonyAnchor = document.createElement('a')
  testimonyAnchor.setAttribute('onclick', 'event.preventDefault()')
  testimonyAnchor.classList.add('title-4')
  testimonyAnchor.href = '#'
  testimonyAnchor.innerText = 'Depoimentos'
  testimonyAnchor.addEventListener('click', () => {
    dropDownWrapper.remove()
    scrollToSection('testimonySection')
    body.classList.remove('locked')
  })
  testimony.appendChild(testimonyAnchor)

  const manager = document.createElement('li')
  const managerAnchor = document.createElement('a')
  managerAnchor.setAttribute('onclick', 'event.preventDefault()')
  managerAnchor.classList.add('title-4')
  managerAnchor.href = '#'
  managerAnchor.innerText = 'Responsável'
  managerAnchor.addEventListener('click', () => {
    dropDownWrapper.remove()
    scrollToSection('technicalManager')
    body.classList.remove('locked')
  })
  manager.appendChild(managerAnchor)

  const contact = document.createElement('li')
  const contactAnchor = document.createElement('a')
  contactAnchor.setAttribute('onclick', 'event.preventDefault()')
  contactAnchor.classList.add('title-4')
  contactAnchor.href = '#'
  contactAnchor.innerText = 'Contato'
  contactAnchor.addEventListener('click', () => {
    dropDownWrapper.remove()
    scrollToSection('contact')
    body.classList.remove('locked')
  })
  contact.appendChild(contactAnchor)

  ulSections.append(resume, services, testimony, manager, contact)

  const contactButton = document.createElement('button')
  contactButton.classList.add('buttonExtraLarge', 'filledGreen', 'contact')
  contactButton.addEventListener('click', () => {
    window.open(
      'https://wa.me/5541996410628?text=Olá, vi seu site e estou entrando em contato para mais informações, você poderia me ajudar?',
      '_blank'
    )
  })

  const whatsappImg = document.createElement('img')
  whatsappImg.src = './src/imgs/whatsapp.png'
  whatsappImg.alt = 'Entre em contato'

  const textContactButton = document.createElement('span')
  textContactButton.innerText = 'Contato e Orçamento'

  const ulLinks = document.createElement('ul')
  ulLinks.classList.add('flex', 'gap-1')

  const mailLink = document.createElement('li')

  const mailAnchor = document.createElement('a')
  mailAnchor.href = 'mailto:perotto.florestal@hotmail.com'

  const mailImg = document.createElement('img')
  mailImg.src = './src/imgs/mailWhite.png'
  mailImg.alt = 'Email'

  mailAnchor.appendChild(mailImg)
  mailLink.appendChild(mailAnchor)

  const facebookLink = document.createElement('li')

  const facebookAnchor = document.createElement('a')
  facebookAnchor.href =
    'https://www.facebook.com/profile.php?id=100087565187658'
  facebookAnchor.target = '_blank'

  const facebookImg = document.createElement('img')
  facebookImg.src = './src/imgs/facebookWhite.png'
  facebookImg.alt = 'Facebook'

  facebookAnchor.appendChild(facebookImg)
  facebookLink.appendChild(facebookAnchor)

  const instagramLink = document.createElement('li')

  const instagramAnchor = document.createElement('a')
  instagramAnchor.href = 'https://www.instagram.com/perottoflorestal/'
  instagramAnchor.target = '_blank'

  const instagramImg = document.createElement('img')
  instagramImg.src = './src/imgs/instagramWhite.png'
  instagramImg.alt = 'instagram'

  instagramAnchor.appendChild(instagramImg)
  instagramLink.appendChild(instagramAnchor)

  ulLinks.append(mailLink, facebookLink, instagramLink)

  divLogo.appendChild(logo)
  buttonClose.appendChild(closeImg)
  dropDownLogo.append(divLogo, buttonClose)
  contactButton.append(whatsappImg, textContactButton)
  dropDownMenu.append(ulSections, contactButton, ulLinks)
  dropDownHeader.appendChild(dropDownLogo)
  dropDownWrapper.append(dropDownHeader, dropDownMenu)
  body.insertAdjacentElement('afterbegin', dropDownWrapper)
}
