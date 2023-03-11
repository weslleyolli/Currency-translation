const buttonCurrency = document.getElementById('buttom-currency')
const popover = document.querySelector('.popover')
const currencyChoise = document.querySelector('.currency-choise')
const textArea = document.querySelector('.text-input')


console.log(textArea.value)

buttonCurrency.addEventListener('click', (e) => {
    if(popover.classList.contains('invisible')) {
        popover.classList.remove('invisible')
    }else {
        popover.classList.add('invisible')
    }
})

const addValueInDisplay = () => {
    valueDisplay = currencyChoise.value * 5.22
    textArea.value = `${valueDisplay.toFixed(2)}`
}