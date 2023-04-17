import { Power1, gsap } from 'gsap'


gsap.fromTo('.fade-up', 
    {
        yPercent: 25, 
        opacity: 0,
    }, {
        yPercent: 0, 
        opacity: 1, 
        duration: 3,
        ease: Power1.easeOut,
    }
)

gsap.fromTo('.fade-in', {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 3,
        delay: 1,
        ease: Power1.easeOut,
    }
)