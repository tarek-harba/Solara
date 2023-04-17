// custom css
import '../styles/vaildate-product.scss'

const authLinks = {
    'growatt' : 'https://www.ginverter.com/support/warranty',
    'longi' : 'https://www.longi.com/ae/modules-authenticity/',
    'marvel' : 'https://www.marvel-battery.com/ewarranty',
    'jinko' : 'https://download.cnet.com/Flash-Track-Jinko-Quality-Tracking-System/3000-2094_4-78190895.html',
}
const companyAuthSelect = document.querySelector('select[name=company-auth]')
companyAuthSelect.addEventListener('change', () => {
    const authLink = document.querySelector('#authLink')
    authLink.href = authLinks[companyAuthSelect.value]
})