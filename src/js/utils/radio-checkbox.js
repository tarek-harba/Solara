 const radioCheckboxes = document.querySelectorAll('.form__checkboxContainer')

 radioCheckboxes.forEach(radCheck => {
    radCheck.addEventListener('click', () => {
        radCheck.firstElementChild.checked = !radCheck.firstElementChild.checked
    })
 })