const buttonCurrency = document.getElementById('buttom-currency')
const popover = document.querySelector('.popover')

buttonCurrency.addEventListener('click', (e) => {
    if(popover.classList.contains('invisible')) {
        popover.classList.remove('invisible')
    }else {
        popover.classList.add('invisible')
    }
})