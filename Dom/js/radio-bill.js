// get a reference to the sms or call radio buttons
var callsTotalElem1 = document.querySelector(".callTotalTwo");
var smsTotalElem1 = document.querySelector(".smsTotalTwo");
var totalCostElem1 = document.querySelector(".totalTwo");
//get a reference to the add button
var radioBillAddBtn = document.querySelector(".radioBillAddBtn");
//create a variable that will keep track of the total bill
var radioCallsTotal = 0;
var radioSmsTotal = 0;
//add an event listener for when the add button is pressed
let theRadioBill = RadioBills();

function textBillTotal1() {
    // get the value entered in the billType textfield
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn) {
        var billItemType = checkedRadioBtn.value;
        // billItemType will be 'call' or 'sms'
    }

    var templateSource = document.querySelector(".userTemplate1").innerHTML;

    // compile the template
    var userTemplate1 = Handlebars.compile(templateSource);

    totalCostElem1.innerHTML = userTemplate1({ totalTwo: theRadioBill.selectRadioBill(billItemType) })
    callsTotalElem1.innerHTML = userTemplate1({ callTotalTwo: theRadioBill.getCallTotalradioCost() })
    smsTotalElem1.innerHTML = userTemplate1({ smsTotalTwo: theRadioBill.getSmsTotalradioCost() })


    //color the total based on the criteria
    totalCostElem1.classList.add(theRadioBill.totalClassName());

    // if (radio_totalCost >= 50) {
    //     // adding the danger class will make the text red
    //     totalCostElem1.classList.add("danger");
    //     totalCostElem1.classList.remove("warning");
    // }
    // else if (radio_totalCost >= 30) {
    //     totalCostElem1.classList.add("warning");
    //     totalCostElem1.classList.remove('danger');
    // }
    // else{
    //     totalCostElem1.classList.remove("warning");
    //     totalCostElem1.classList.remove('danger');
    // }
}
radioBillAddBtn.addEventListener('click', textBillTotal1);

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen