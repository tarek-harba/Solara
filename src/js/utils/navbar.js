let hamburgerMenu = document.querySelector('.hamburgerMenu')

hamburgerMenu.addEventListener('click', () => {
    console.log('clicked')
    document.querySelector('.navbar__navLinks').classList.toggle('-hidden')
    document.querySelector('body').classList.toggle('-no-scroll')
})