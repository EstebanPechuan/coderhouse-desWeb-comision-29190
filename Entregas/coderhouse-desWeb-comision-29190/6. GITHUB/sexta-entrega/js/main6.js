// Efecto scroll - Header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header')
    const about = document.querySelector('.hero__about')

    header.classList.toggle('header-scroll', window.scrollY > 0)
    about.classList.toggle('hero__about-scroll', window.scrollY > 100)
})


// Toggle Icon Menu
const menu = document.querySelector('.menu')
const iconArr = document.querySelectorAll('.icons img')
iconArr.forEach(icon => {
    icon.addEventListener('click', () => {
        iconArr.forEach(icon2 => {
            icon2.classList.add('icon-active')
        });
        icon.classList.remove('icon-active')
        menu.classList.toggle('menu-active')
    })
});


// Animación testimonios
const testimonios = document.querySelectorAll('.card-testimonio')

testimonios.forEach(testim => {
    testim.addEventListener('click', () => {
        testimonios.forEach(testim2 => {
            testim2.classList.remove('testimonio-click')
            testim2.childNodes[3].classList.remove('testimonio-img-click')
        });

        testim.classList.add('testimonio-click')
        testim.childNodes[3]
        .classList.add('testimonio-img-click')
    })
});