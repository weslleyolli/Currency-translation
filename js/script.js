const buttonCurrency = document.getElementById('buttom-currency')
const popover = document.querySelector('.popover')
const currencyChoise = document.querySelector('.currency-choise')
const textArea = document.querySelector('.text-input')

const euro = document.querySelector('.eur')
const gbp = document.querySelector('.gbp')
const che = document.querySelector('.che')
const jpy = document.querySelector('.jpy')
const usd = document.querySelector('.usd')

const imageCurrency = document.querySelector('.image-currency')


console.log(textArea.value)

buttonCurrency.addEventListener('click', (e) => {
    if(popover.classList.contains('invisible')) {
        popover.classList.remove('invisible')
    }else {
        popover.classList.add('invisible')
    }
})

let addValueInDisplay = () => {
    valueDisplay = currencyChoise.value * 5.22
    textArea.value = `${valueDisplay.toFixed(2)}`
}

usd.addEventListener('click', (e) => {
    e.preventDefault()
    document.querySelector('.text-currency').innerHTML = 'USD'
    imageCurrency.setAttribute('src', './assets/Usa.svg ')
    addValueInDisplay = () => {
        valueDisplay = currencyChoise.value * 5.22
        textArea.value = `${valueDisplay.toFixed(2)}`
    }
})

euro.addEventListener('click', (e) => {
    e.preventDefault()
    document.querySelector('.text-currency').innerHTML = 'EUR'
    imageCurrency.setAttribute('src', './assets/euro.svg ')
    addValueInDisplay = () => {
        valueDisplay = currencyChoise.value * 5.55
        textArea.value = `${valueDisplay.toFixed(2)}`
    }
})

gbp.addEventListener('click', (e) => {
    e.preventDefault()
    document.querySelector('.text-currency').innerHTML = 'GBP'
    imageCurrency.setAttribute('src', './assets/gbp.svg ')
    addValueInDisplay = () => {
        valueDisplay = currencyChoise.value * 6.28
        textArea.value = `${valueDisplay.toFixed(2)}`
    }
})

che.addEventListener('click', (e) => {
    e.preventDefault()
    document.querySelector('.text-currency').innerHTML = 'CHE'
    imageCurrency.setAttribute('src', './assets/che.png ')
    addValueInDisplay = () => {
        valueDisplay = currencyChoise.value * 5.66
        textArea.value = `${valueDisplay.toFixed(2)}`
    }
})

jpy.addEventListener('click', (e) => {
    e.preventDefault()
    document.querySelector('.text-currency').innerHTML = 'JPY'
    imageCurrency.setAttribute('src', './assets/Jpy.png ')
    addValueInDisplay = () => {
        valueDisplay = currencyChoise.value * 0.032
        textArea.value = `${valueDisplay.toFixed(2)}`
    }
})