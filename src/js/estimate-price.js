import './utils/popup'
import './utils/radio-checkbox'

// custom css
import '../styles/estimate-price.scss'
import { ALERT_POPUP, ERROR_POPUP, NORMAL_POPUP, SUCCESS_POPUP, SUCESS_POPUP, createPopup, initPopup } from './utils/popup'

const estimateForm = document.querySelector('.hero__estimateForm')

const choicesWeights = {
    'lighting' : 7,
    'pc' : 30,
    'gaming-pc' : 40,
    'gaming-lap' : 40,
    'tv' : 10,
    'washing-machine' : 50,
    'water-motor' : 50,
    'water-heater' : 40,
    'fridge' : 25,
}
let averageSystemPrice = 7000000

estimateForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let estiamteChoices = []
    document.querySelectorAll('input[name=usages').forEach(inp => {
        if (inp.checked) {
            estiamteChoices.push(inp.value)
        }
    })

    if (estiamteChoices.length > 0) {
        let exp = '(('
        estiamteChoices.forEach((choice, ind) => {exp += `${choicesWeights[choice]}${ind != estiamteChoices.length-1 ? '+' : ')'}`})
        const priceEstimate = Math.round(eval(`${exp}/100)*${averageSystemPrice}`)).toLocaleString('en-US')
        createPopup('سعر النظام التقديري', `تبعاً لما تم اختياره من إستعمالات السعر التقديري هو: ${priceEstimate} ل.س`, NORMAL_POPUP, true, 'التواصل معنا', 'contact-us.html', true)
    } else {
        createPopup('لم يتم إختيار أي جهاز', 'يجب اختيار واحد من الخيارات المعروضة على الأقل لكي يتم تقييم تكلفة المشروع', ERROR_POPUP, false, '', '', true, 'error-warning-line')
    }
})