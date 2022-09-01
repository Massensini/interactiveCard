const cardNumb = document.querySelector('.card-num')
const cardName = document.querySelector('.card-name')
const cardMounth = document.querySelector('.cardMM')
const cardYear = document.querySelector('.cardYY')
const cardCvc = document.querySelector('.cvc-card')
const inputName = document.querySelector('#inp-name')
const inputNumb = document.querySelector('#inp-num')
const inputMounth = document.querySelector('#mounth')
const inputYear = document.querySelector('#year')
const inputCvc = document.querySelector('#cvc')
const submit = document.querySelector('.submit-btn')
const form = document.querySelector('.form-container')
const finishedForm = document.querySelector('.finished-form')
const confirmBTn = document.querySelector('.confirm-btn')
const errorMsg = Array.from(document.querySelectorAll('.error-msg'))

function formData() {
    const cardFormat = [
        'Your name',
        '0000 0000 0000 0000',
        '00',
        '000'
    ]

    function inputNameFormat() {
        inputName.addEventListener('keypress', function (e) {
            if (!checkChar(e)) {
                e.preventDefault()
            }
        })

        function checkChar(e) {
            const char = String.fromCharCode(e.keyCode)
            const pattern = '[a-zA-Z ]'

            if (char.match(pattern)) {
                return true
            }
        }
    }

    function cardFormatNumbers() {
        inputNumb.addEventListener('input', function(e) {
            e.target.value = e.target.value = e.target.value
            .replace(/[^\dA-Z]/g, '')
            .replace(/(.{4})/g, '$1 ')
            .trim()
        })
    }

    function dataEvent(inp, element, numErrorArray, len, cardFormatNum) {

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

        if (inp.value == '') {
            inp.classList.add('inputError')
            errorMsg[numErrorArray].innerHTML = `Can't be blank`
            errorMsg[numErrorArray].classList.add('errorMsgActive')
            element.innerHTML = cardFormat[cardFormatNum]
        }
    }

    function inputs() {
        inputName.addEventListener('input', () => {
            dataEvent(inputName, cardName, 0, 3, 0)
        })

        inputNumb.addEventListener('input', () => {
            dataEvent(inputNumb, cardNumb, 1, 13, 1)
        })

        inputMounth.addEventListener('input', () => {
            dataEvent(inputMounth, cardMounth, 2, 2, 2)
        })

        inputYear.addEventListener('input', () => {
            dataEvent(inputYear, cardYear, 2, 2, 2)
        })

        inputCvc.addEventListener('input', () => {
            dataEvent(inputCvc, cardCvc, 3, 3, 3)
        })
    }

    inputNameFormat()
    cardFormatNumbers()
    inputs()
}

formData()

submit.addEventListener('click', (e) => {
    e.preventDefault()

    if (inputName.value.length >= 3 && inputNumb.value.length >= 13 && inputMounth.value.length >= 2 && inputYear.value.length >= 2 && inputCvc.value.length >= 3) {
        form.style.display = 'none'
        finishedForm.style.display = 'flex'
    }
})

confirmBTn.addEventListener('click', (e) => {
    e.preventDefault()

    inputName.value = ''
    cardName.innerHTML = 'Jane Appleseed'

    inputNumb.value = ''
    cardNumb.innerHTML = '0000 0000 0000 0000'

    inputMounth.value = ''
    cardMounth.innerHTML = '00'

    inputYear.value = ''
    cardYear.innerHTML = '00'

    inputCvc.value = ''
    cardCvc.innerHTML = '000'

    form.style.display = 'flex'
    finishedForm.style.display = 'none'
})