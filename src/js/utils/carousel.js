import { throttle } from "./fun"

let pageCarousels = document.querySelectorAll('.carousel__content')
let carouselsInfo = {}
let carouselsArrows = document.querySelectorAll('.carousel__arrow')

const calcPagesNumber = (carouselName) => (Math.ceil(carouselsInfo[carouselName].cardsNum / carouselsInfo[carouselName].displayNum)) 


const disableArrow = (carousel) => {
    document.querySelector(`.carousel__arrow[data-name=${carousel.dataset.name}][data-direction=left]`).classList.toggle('-disabled', carousel.scrollLeft < -1 * (carousel.scrollWidth - carousel.offsetWidth - 1))
    document.querySelector(`.carousel__arrow[data-name=${carousel.dataset.name}][data-direction=right]`).classList.toggle('-disabled', carousel.scrollLeft === 0)
}

const getDisplayNum = (carousel) => {
    let displayNum = 1
    
    if (carousel.classList.contains('-col-3')) {
        displayNum = 3
        if (window.innerWidth <= 425) {
            displayNum = 1
        }
        else if (window.innerWidth <= 820) {
            displayNum = 2
        } 
    } 
    else if (carousel.classList.contains('-col-4')) {
        displayNum = 4
        if (window.innerWidth <= 425) {
            displayNum = 1
        }
        else if (window.innerWidth <= 820) {
            displayNum = 2
        } 
    } 

    return displayNum
}

const calcIndicatorsNumber = (carousel) => {
    let carouselName = carousel.dataset.name
    return Math.ceil(carouselsInfo[carouselName].cardsNum / getDisplayNum(carousel))
}

const markCurrentPage = (carousel) => {
    let carouselName = carousel.dataset.name
    let indicatorsNum = calcIndicatorsNumber(carousel)
    let currentPageMarker = carousel.scrollWidth / indicatorsNum
    let currentPageIndicator = Math.abs(carousel.scrollLeft) > 0 ? Math.ceil(Math.abs(carousel.scrollLeft) / currentPageMarker) : 1
    currentPageIndicator = currentPageIndicator > indicatorsNum ? currentPageIndicator - 1 : currentPageIndicator 
    document.querySelector(`.carousel__indicator[data-name=${carouselName}].-current`).classList.toggle('-current')
    document.querySelector(`.carousel__indicator[data-name=${carouselName}][data-page="${currentPageIndicator}"]`).classList.toggle('-current')
}

const generateIndicatorElements = (carousel) => {
    let indicatorElements = ''
    let indicatorsNumber = calcIndicatorsNumber(carousel)
    for (let p = 1; p < indicatorsNumber+1; p++) {
        indicatorElements += `<i class="ri-checkbox-blank-circle-fill carousel__indicator ${p==1 ? "-current" : ""}" data-page=${p} data-name=${carousel.dataset.name}></i>`
    }
    return indicatorElements
}

const createPageIndicators = (carousel) => {
    let pageIndicators = document.querySelectorAll('.carousel__indicators')
    pageIndicators.forEach(pi => {
        pi.innerHTML = generateIndicatorElements(carousel)
    })
}



function scrollLeft(arrowName) {
    let carousel = document.querySelector(`.carousel__content[data-name=${arrowName}]`)
    let scrollOptions = {
        left: -1 * carouselsInfo[arrowName]['cardWidth'],
        behavior: 'smooth'
    }
    carousel.scrollBy(scrollOptions);
}

function scrollRight(arrowName) {
    let carousel = document.querySelector(`.carousel__content[data-name=${arrowName}]`)
    let scrollOptions = {
        left: carouselsInfo[arrowName]['cardWidth'],
        behavior: 'smooth'
    }
    carousel.scrollBy(scrollOptions);
}

const addArrowControl = arrow => {
    let arrowDirection = arrow.dataset.direction
    let arrowName = arrow.dataset.name
    
    if (arrowDirection == 'left') {
        arrow.addEventListener('click', (e) => scrollLeft(arrowName))
    } else {
        arrow.addEventListener('click', (e) => scrollRight(arrowName))
    }
}

const setupCarousels = () => {
    pageCarousels.forEach(carousel => {
        
        let carouselName = carousel.dataset.name
        
        carouselsInfo[carouselName] = {
            'cardsNum' : carousel.children.length,
            'displayNum' : getDisplayNum(carousel), // number of displayed cards per slide
            'cardWidth' : carousel.offsetWidth,
            'currentPage' : 1
        }
        
        createPageIndicators(carousel)
    })
}

const initCarousels = () => {
    setupCarousels()
    pageCarousels.forEach(carousel => {
        carousel.addEventListener('scroll', () => throttle(disableArrow(carousel), 100))
        if (carousel.hasAttribute('data-hasIndicators')) {
            carousel.addEventListener('scroll', () => throttle(markCurrentPage(carousel), 100))
        }
        disableArrow(carousel)
    })
    
    carouselsArrows.forEach(arrow => {
        addArrowControl(arrow)
    });
}

const adjustCarousels = () => {
    setupCarousels()
}

window.addEventListener('resize', adjustCarousels)

window.addEventListener('load', initCarousels)