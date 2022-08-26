const form = document.querySelector('.form')
const finishedForm = document.querySelector('.finished')

const inputName = document.querySelector('#name')
const inputNumCard = document.querySelector('#cardNum')
const inputMM = document.querySelector('.MM')
const inputYY = document.querySelector('.YY')
const inputCvc = document.querySelector('#cvc')

const numCard = document.querySelector('.cardNum')
const nameCard = document.querySelector('.nameCard')
const mmCard = document.querySelector('.dateMM')
const yyCard = document.querySelector('.dateYY')
const cvcCard = document.querySelector('.cvcCard')

const errorMsg = Array.from(document.querySelectorAll('.errorMsg'))

const submitBtn = document.querySelector('#submit')
const confirmBTn = document.querySelector('#confirm')

function formData() {

    function dataEvent(inp, element, numErrorArray, len) {
        if (inp.value) {
            element.innerHTML = inp.value
            inp.classList.remove('inputError')
            errorMsg[numErrorArray].classList.remove('errorMsgActive')
        } else {
            inp.classList.add('inputError')
            errorMsg[numErrorArray].classList.add('errorMsgActive')
        }

        if (inp.value.length < len) {
            inp.classList.add('inputError')
            errorMsg[numErrorArray].innerHTML = `Minimum ${len} characters`
            errorMsg[numErrorArray].classList.add('errorMsgActive')
        }
    }

    function inputs() {
        inputName.addEventListener('input', () => {
            dataEvent(inputName, nameCard, 0, 3)
        })

        inputNumCard.addEventListener('input', () => {
            dataEvent(inputNumCard, numCard, 1, 13)
        })

        inputMM.addEventListener('input', () => {
            dataEvent(inputMM, mmCard, 2, 2)
        })

        inputYY.addEventListener('input', () => {
            dataEvent(inputYY, yyCard, 2, 2)
        })

        inputCvc.addEventListener('input', () => {
            dataEvent(inputCvc, cvcCard, 3, 3)
        })
    }

    inputs()
}

formData()

submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    
    if (inputName.value.length >= 3 && inputNumCard.value.length >= 13 && inputMM.value.length >= 2 && inputYY.value.length >= 2 && inputCvc.value.length >= 3) {
        form.style.display = 'none'
        finishedForm.style.display = 'flex'
    }
})

confirmBTn.addEventListener('click', (e) => {
    e.preventDefault()

    inputName.value = ''
    nameCard.innerHTML = ''

    inputNumCard.value = ''
    numCard.innerHTML = '0000 0000 0000 0000'

    inputMM.value = ''
    mmCard.innerHTML = '00'

    inputYY.value = ''
    yyCard.innerHTML = '00'

    inputCvc.value = ''
    cvcCard.innerHTML = '000'

    form.style.display = 'flex'
    finishedForm.style.display = 'none'
})