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
    }

    function inputs() {
        inputName.addEventListener('input', () => {
            dataEvent(inputName, nameCard, 0, 3)
        })

        inputNumCard.addEventListener('input', () => {
            dataEvent(inputNumCard, numCard, 1, 16)
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

    if (inputName.value && inputNumCard.value && inputMM.value && inputYY.value && inputCvc.value) {
        form.style.display = 'none'
        finishedForm.style.display = 'flex'
    }

})