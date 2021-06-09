var regNumber1 = document.querySelector('.regNumberInput1')

var tempAdd = document.querySelector('.tempAdd') // templates
var tempShow = document.querySelector('.tempShow')  // templates
var tempAll = document.querySelector('.tempAll') // templates
var tempRes = document.querySelector('.tempRes') // templates
var error1 = document.querySelector('.error-1') // templates

const regType10 = /^((CA|CJ|CL)\s([0-9]){5})$/
const regType20 = /^((CA|CL|CJ)\s([0-9]){3}\s([0-9]){3})$/
const regType30 = /^((CA|CL|CJ)\s([0-9]){3}\-([0-9]){3})$/

var theSelectedTown = ''
var theRegNumber = []

if (localStorage['rg-numbers']) {
    theRegNumber = JSON.parse(localStorage.getItem('rg-numbers'))
}

var templateSource = document.querySelector(".userTemplate").innerHTML;

// compile the template
var userTemplate = Handlebars.compile(templateSource);

const element1 = document.getElementById('myEle1')
let registration1 = registrations(theRegNumber)

element1.innerHTML = userTemplate({ reg: theRegNumber })

function templatesAddReg() {

    element1.innerHTML = ''
    var regNu = regNumber1.value
    console.log(regNu)

    var reg_N = regNu.charAt(0).toUpperCase() + regNu.charAt(1).toUpperCase() + regNu.slice(2)
    if (reg_N === '') {
        setTimeout(() => {
            error1.innerHTML = "Please enter vehicle registration number"
            error1.classList.add('error')
        }, 0)
        setTimeout(() => {
            error1.innerHTML = ''
            tempResetEle()
        }, 4000)
    }
    else if (reg_N !== '') {
        reg_N = reg_N.charAt(0).toUpperCase() + reg_N.charAt(1).toUpperCase() + reg_N.slice(2)

        if (regType10.test(reg_N) || regType20.test(reg_N) || regType30.test(reg_N)) {
            if (!theRegNumber.includes(reg_N)) {
                registration.setReg(reg_N)
                theRegNumber.push(reg_N)
                element1.innerHTML = userTemplate({ reg: theRegNumber })

                localStorage.setItem('rg-numbers', JSON.stringify(theRegNumber))
                tempResetEle()
            }
            else {// Already exist registration error1 message
                setTimeout(() => {
                    error1.innerHTML = reg_N + " is already on the list list"
                    error1.classList.add('error')
                }, 0)
                setTimeout(() => {
                    error1.innerHTML = ''
                    tempResetEle()
                }, 6000)
            }
        }
        else {
            setTimeout(() => { // not matching registration format 
                error1.innerHTML = "Registration number do not match the format"
                error1.classList.add('error')
            }, 0)
            setTimeout(() => {
                error1.innerHTML = ''
                tempResetEle()
            }, 4000)
        }
    }
    else {
        setTimeout(() => { //empty input for registration error1 on adding
            error1.value = "Please enter vehicle registration number"
            error1.classList.add('error')
        }, 0)
        setTimeout(() => {
            error1.value = ''
            tempResetEle()
        }, 4000)
    }

    tempUncheckRadioBtn()
}



function templateShowTown() {
    element1.innerHTML = ''
    tempResetEle()
    var temp_storeDReg = []
    var theSelectTown11 = document.querySelector("input[name='radio']:checked");


    if (theSelectTown11) {
        var townReg = theSelectTown11.value
        temp_storeDReg = registration1.filterFunction(townReg, theRegNumber)
        console.log(temp_storeDReg)
        while (element1.firstChild) {
            element1.removeChild(element.firstChild)
        }
        temp_storeDReg = regNumbers
        if (temp_storeDReg.length === 0) {
            setTimeout(() => {
                error1.innerHTML = "No registration number(s) for this town"
                error1.classList.add('error')
            }, 0)
            setTimeout(() => {
                error1.innerHTML = ''
                error1.classList.remove('error')
                tempUncheckRadioBtn()
            }, 6000)
        }
        if (temp_storeDReg.length !== 0) {
            element1.innerHTML = userTemplate({ reg: registration1.filterFunction(townReg, theRegNumber) })
        }

    }


    else if (!theSelectTown11) {
        setTimeout(() => {
            error1.innerHTML = "Please select town"
            error1.classList.add('error')
        }, 0)
        setTimeout(() => {
            error1.innerHTML = ''
            error1.classList.remove('error')
        }, 4000)
    }


}
function tempResetEle() {
    return regNumber.value = ''
}
function templateReset() {
    element1.innerHTML = ''
    tempResetEle()
    tempUncheckRadioBtn()
    if (localStorage['rg-numbers']) {
        setTimeout(() => {

            error1.innerHTML = "Storage have been successfully resetted!"
            error1.classList.add('notification')
        }, 0)
        setTimeout(() => {
            localStorage.clear()
            location.reload()
            error1.innerHTML = ''
        }, 4000)
    }
    else {
        setTimeout(() => {
            error1.innerHTML = "No registration on storage"
            error1.classList.add('error')
        }, 0)
        setTimeout(() => {
            error1.innerHTML = ''
            error1.classList.remove('error')
        }, 4000)
    }
}

function tempUncheckRadioBtn() {
    document.getElementById("rad10").checked = false;
    document.getElementById("rad20").checked = false;
    document.getElementById("rad30").checked = false;
    selectTown1 = null
}

function templateShowAll() {
    var temp_storeDReg = theRegNumber
    element1.innerHTML = ''
    tempResetEle()
    tempUncheckRadioBtn()

    if (temp_storeDReg.length === 0) {
        setTimeout(() => {
            error1.innerHTML = "No registration on storage"
            error1.classList.add('error')
        }, 0)
        setTimeout(() => {
            error1.innerHTML = ''
            error1.classList.remove('error')
        }, 4000)
    }

    else if (temp_storeDReg.length !== 0) {
        var temp_storeDReg = theRegNumber
        var temp_storeDReg = theRegNumber
        element1.innerHTML = userTemplate({ reg: temp_storeDReg })
    }
}

tempAdd.addEventListener('click', templatesAddReg)
tempShow.addEventListener('click', templateShowTown)
tempRes.addEventListener('click', templateReset)
tempAll.addEventListener('click', templateShowAll)