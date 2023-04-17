// utils
import './utils/carousel'
import {elementFromHTML} from './utils/fun'
import { throttle } from 'lodash';


// custom css
import '../styles/solar-systems.scss'

let systems = [
    {
        'name':'النظام المنزلي البسيط',
        'img':'system-1.jpg',
    },
    {
        'name':'النظام المنزلي المتقدم',
        'img':'system-2.jpg',
    },
    {
        'name':'النظام المنزلي الاستهلاكي',
        'img':'system-3.jpg',
    },
    {
        'name':'النظام الصناعي المتوسط',
        'img':'system-4.jpg',
    }
]

let pagesParent = document.querySelector('.systems__carousel')

const createSystems = () => {
    pagesParent.innerHTML = ''
    let totalSystemsNum = 18
    let systemsPerPage = 6
    
    if (window.innerWidth <= 650) {
        systemsPerPage = 2
    } else if (window.innerWidth <= 1024) {
        systemsPerPage = 4
    }
    
    let genPagesNum = Math.ceil(totalSystemsNum/systemsPerPage)

    for(let i = 0; i < genPagesNum; i++) {
        let page = '<div class="systems__page carousel__card">'
        const systemsNum = (totalSystemsNum%systemsPerPage && i == genPagesNum-1) ? totalSystemsNum%systemsPerPage : systemsPerPage
        for(let j = 0; j < systemsNum; j++) {
            const system = `\
            <div class="system">\
                <img\
                    src=${systems[j%4]['img']}\
                    alt=""\
                    class="system__img"\
                />\
                <h3 class="system__heading">${systems[j%4]['name']}</h3>\
                <a href="system.html" class="button -secondary system__cta">\
                رؤية النظام\
                </a>\
            </div>`
            page += system
        }
        page += '</div>'
        pagesParent.appendChild(elementFromHTML(page))
    }       
}
window.addEventListener('load', createSystems())
window.addEventListener('resize', throttle(createSystems, 100))