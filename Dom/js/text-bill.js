// get a reference to the textbox where the bill type is to be entered
var billTypeText = document.querySelector(".billTypeText");
var callsTotalElem = document.querySelector(".callTotalOne");
var smsTotalElem = document.querySelector(".smsTotalOne");
var totalCostElem = document.querySelector(".totalOne");

//get a reference to the add button
var textTotalAddBtn = document.querySelector(".addToBillBtn");
//create a variable that will keep track of the total bill
var textCallsTotal = 0;
var textSmsTotal = 0;
// var totalCost = document.querySelector(".totalOne")
//add an event listener for when the add button is pressed
let textBill = textBills();

function textBillTotal() {
    // get the value entered in the billType textfield

    // update the correct total
    var templateSource = document.querySelector(".userTemplate").innerHTML;

    // compile the template
    var userTemplate = Handlebars.compile(templateSource);

    totalCostElem.innerHTML = userTemplate({ totalOne: textBill.setBillType(billTypeText.value) });
    callsTotalElem.innerHTML = userTemplate({ callTotalOne: textBill.getCallTotalCost() });
    smsTotalElem.innerHTML = userTemplate({ smsTotalOne: textBill.getSmsTotalCost() });
    //update the totals that is displayed on the screen.

    //color the total based on the criteria
    totalCostElem.classList.add(textBill.totalClassName())
}
textTotalAddBtn.addEventListener('click', textBillTotal);
//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
