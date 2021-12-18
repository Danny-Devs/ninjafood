const burger = document.getElementById('burger')
const menu = document.getElementById('menu')

burger.addEventListener('click', () => {
  if (menu.classList.contains('invisible')) {
    menu.classList.remove('invisible')
    menu.classList.add('visible')
  } else {
        menu.classList.remove('visible')
        menu.classList.add('invisible')
  }
})