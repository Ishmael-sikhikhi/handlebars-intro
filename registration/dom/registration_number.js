var regNumber = document.querySelector('.regNumberInput')
var town = document.querySelector('.town')
var addBtn = document.querySelector('.addBtn')
var showBtn = document.querySelector('.showBtn')
var showAllBtn = document.querySelector('.allTowns')
var reset = document.querySelector('.reset')
var error = document.querySelector('.error')

const regType1 = /^((CA|CJ|CL)\s([0-9]){5})$/
const regType2 = /^((CA|CL|CJ)\s([0-9]){3}\s([0-9]){3})$/
const regType3 = /^((CA|CL|CJ)\s([0-9]){3}\-([0-9]){3})$/



var selectTown = ''
var regNumbers = []
if (localStorage['reg-number']) {
    regNumberS = JSON.parse(localStorage.getItem('reg-number'))
}
if (!localStorage['reg-number']) {
    regNumberS = regNumbers
}
const element = document.getElementById('myEle')
for (var i = 0; i < regNumberS.length; i++) {
    var regDiv1 = document.createElement("BUTTON");
    var input = document.createTextNode(regNumberS[i])
    regDiv1.appendChild(input);
    regDiv1.classList.add('regCol')
    document.getElementById('myEle').appendChild(regDiv1)
}


let registration = registrations()

function addReg() {
    element.innerHTML = ''
    var regNu = regNumber.value


    var regN = regNu.charAt(0).toUpperCase() + regNu.charAt(1).toUpperCase() + regNu.slice(2)
    if (regN === '') {
        setTimeout(() => {
            error.innerHTML = "Please enter vehicle registration number"
            error.classList.add('error')
        }, 0)
        setTimeout(() => {
            error.innerHTML = ''
            resetEle()
        }, 4000)
    }
    else if (regN !== '') {
        regN = regN.charAt(0).toUpperCase() + regN.charAt(1).toUpperCase() + regN.slice(2)

        if (regType1.test(regN) || regType2.test(regN) || regType3.test(regN)) {
            if (!regNumbers.includes(regN)) {
                registration.setReg(regNu)
                regNumbers.push(regN)
                for (var i = 0; i < regNumbers.length; i++) {
                    var regDiv = document.createElement("BUTTON");
                    var input = document.createTextNode(regNumbers[i])
                    regDiv.appendChild(input);
                    regDiv.classList.add('regCol')
                    document.getElementById('myEle').appendChild(regDiv)
                }
                localStorage.setItem('reg-number', JSON.stringify(regNumbers))
                resetEle()
            }
            else {// Already exist registration error message
                setTimeout(() => {
                    error.innerHTML = regN + " is already on the list list"
                    error.classList.add('error')
                }, 0)
                setTimeout(() => {
                    error.innerHTML = ''
                    resetEle()
                }, 6000)
                for (var i = 0; i < regNumberS.length; i++) {
                    var regDiv = document.createElement("BUTTON");
                    var input = document.createTextNode(regNumberS[i])
                    regDiv.appendChild(input);
                    regDiv.classList.add('regCol')
                    document.getElementById('myEle').appendChild(regDiv)
                }
            }

        }
        else {
            setTimeout(() => { // not matching registration format 
                error.innerHTML = "Registration number do not match the format"
                error.classList.add('error')
            }, 0)
            setTimeout(() => {
                error.innerHTML = ''
                resetEle()
            }, 4000)

        }
    }
    else {
        setTimeout(() => { //empty input for registration error on adding
            error.value = "Please enter vehicle registration number"
            error.classList.add('error')
        }, 0)
        setTimeout(() => {
            error.value = ''
            resetEle()
        }, 4000)
    }

    uncheckRadioBtn()
}




function showRegForTown() {
    var storeDReg = []
    element.innerHTML = ''
    resetEle()
    var theSelectTown = document.querySelector("input[name='radio']:checked");


    if (theSelectTown) {
        var townReg = theSelectTown.value
        storeDReg = registration.filterFunction(townReg, regNumberS)
        while (element.firstChild) {
            element.removeChild(element.firstChild)
        }

        if (storeDReg.length === 0) {
            setTimeout(() => {
                error.innerHTML = "No registration number(s) for this town"
                error.classList.add('error')
            }, 0)
            setTimeout(() => {
                error.innerHTML = ''
                error.classList.remove('error')
                uncheckRadioBtn()
            }, 6000)
        }
        if (storeDReg.length !== 0) {
           
            console.log(storeDReg)
            for (var i = 0; i < storeDReg.length; i++) {

                var regDiv = document.createElement("BUTTON");
                var input = document.createTextNode(storeDReg[i])
                regDiv.appendChild(input)
                document.getElementById('myEle').appendChild(regDiv)
                uncheckRadioBtn()
            }

        }

    }


    else if (!theSelectTown) {
        setTimeout(() => {
            error.innerHTML = "Please select town"
            error.classList.add('error')
        }, 0)
        setTimeout(() => {
            error.innerHTML = ''
            error.classList.remove('error')
        }, 4000)
    }


}
function resetEle() {
    return regNumber.value = ''
}
function resetRegSorage() {
    element.innerHTML = ''
    resetEle()
    uncheckRadioBtn()
    if (localStorage['reg-number']) {
        localStorage['reg-number']
        setTimeout(() => {

            error.innerHTML = "Storage have been successfully resetted!"
            error.classList.add('notification')
        }, 0)
        setTimeout(() => {
            localStorage['reg-number'] = []
            location.reload()
            error.innerHTML = ''
        }, 4000)
    }
    else {
        setTimeout(() => {
            error.innerHTML = "No registration on storage"
            error.classList.add('error')
        }, 0)
        setTimeout(() => {
            error.innerHTML = ''
            error.classList.remove('error')
        }, 4000)
    }
}

function uncheckRadioBtn() {
    document.getElementById("rad1").checked = false;
    document.getElementById("rad2").checked = false;
    document.getElementById("rad3").checked = false;
    selectTown = null
}

function showAll() {
    var storeDReg = regNumberS
    element.innerHTML = ''
    resetEle()
    uncheckRadioBtn()
    
    if (storeDReg.length === 0) {
        setTimeout(() => {
            error.innerHTML = "No registration on storage"
            error.classList.add('error')
        }, 0)
        setTimeout(() => {
            error.innerHTML = ''
            error.classList.remove('error')
        }, 4000)
    }

    else if (storeDReg.length !== 0) {
        for (var i = 0; i < regNumberS.length; i++) {
            var regDiv1 = document.createElement("BUTTON");
            var input = document.createTextNode(regNumberS[i])
            regDiv1.appendChild(input);
            regDiv1.classList.add('regCol')
            document.getElementById('myEle').appendChild(regDiv1)
        }
    }
}

addBtn.addEventListener('click', addReg)
showBtn.addEventListener('click', showRegForTown)
reset.addEventListener('click', resetRegSorage)
showAllBtn.addEventListener('click', showAll)