import { elementFromHTML } from "./fun"

export const NORMAL_POPUP = 0
export const SUCCESS_POPUP = 1
export const ERROR_POPUP = 2
export const ALERT_POPUP = 3

function initPopup() {
    const popup = document.querySelector('.popup')
    const popupActions = document.querySelectorAll('.popup__action')
    
    
    popupActions.forEach(act => {
        if (act.dataset.role === 'close' ) {
            act.addEventListener('click', () => {
                popup.style.display = 'none'
                popup.remove()
            })
        }
    })
}

export function createPopup (title, message, alertType, hasFollowup=false, followupText='', followupLink='', hasIcon=false, iconName='price-tag-3-line') {
    const popupIcon = `<i class="ri-${iconName} popup__icon -${alertType===ERROR_POPUP ? 'error' : (alertType===SUCCESS_POPUP ? 'success' : (alertType===ALERT_POPUP ? 'alert' : ''))}"></i>`
    const popupFollowup = `${hasFollowup ? `<a href=${followupLink} target="_blank" class="button -primary popup__action" data-role="followup"><i class="ri-external-link-line button__icon"></i>${followupText}</a>` : ''}`
    const popupClose = `<button class="button -${alertType===ERROR_POPUP ? 'error' : (alertType===SUCCESS_POPUP ? 'success' : (alertType===ALERT_POPUP ? 'alert' : 'secondary'))} popup__action" data-role="close"><i class="ri-close-line button__icon"></i>إغلاق</button>`
    const template = `\
    <div class="popup">\
        <div class="popup__content">\
            <div class="popup__heading">\
                ${hasIcon ? popupIcon : ''}\
                <h4 class="popup__title">${title}</h4>\
            </div>\
            <p class="popup__message">${message}</p>\
            <div class="popup__actions">\
                ${popupClose}\
                ${popupFollowup}\
            </div>\
        </div>\
    </div>`
    document.querySelector('body').appendChild(elementFromHTML(template))
    initPopup()
}