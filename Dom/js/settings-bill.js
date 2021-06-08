// get a reference to the sms or call radio buttons
var callsTotalElem2 = document.querySelector(".callTotalSettings");
var smsTotalElem2 = document.querySelector(".smsTotalSettings");
// get refences to all the settings fields
var totalCostElem2 = document.querySelector(".totalSettings");
var setCallCostEle2 = document.querySelector(".callCostSetting");
var setSmsCostEle2 = document.querySelector(".smsCostSetting");
var setWarningLevelEle = document.querySelector(".warningLevelSetting");
var setCrictalLevelEle = document.querySelector(".criticalLevelSetting");
//get a reference to the add button
var addButtonSettings = document.querySelector(".addButtonSettings");
//get a reference to the 'Update settings' button
var updateSettingsBtn = document.querySelector(".updateSettings");
// create a variables that will keep track of all the settings
var setCallCost = 0;
var setSmsCost = 0;
var setWarningLevel = 0;
var setCrictalLevel = 0;
// create a variables that will keep track of all three totals.
var callsTotal = 0;
var smsTotal = 0;
var total = 0;
//add an event listener for when the 'Update settings' button is pressed
let billWithSettings = BillWithSethings();
function settingsBillTotal() {

    billWithSettings.setCallCost(Number(setCallCostEle2.value));
    billWithSettings.setSmsCost(Number(setSmsCostEle2.value));
    billWithSettings.setWarningLevel(setWarningLevelEle.value);
    billWithSettings.setCriticalLevel(setCrictalLevelEle.value);
    colorUpdate()
}
updateSettingsBtn.addEventListener('click', settingsBillTotal);
//add an event listener for when the add button is pressed
function addSettingsBillTotal() {
    // get the value entered in the billType textfield
    var checkedRadioBtn1 = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (checkedRadioBtn1) {

        var billItemTypeWithSettings = checkedRadioBtn1.value
        // billItemType will be 'call' or 'sms'
        // update the correct total
        billWithSettings.addTotalCost(billItemTypeWithSettings);

    }



    totalCostElem2.innerHTML = (billWithSettings.getTotalCost()).toFixed(2)
    callsTotalElem2.innerHTML = (billWithSettings.getTotalCallCost()).toFixed(2)
    smsTotalElem2.innerHTML = (billWithSettings.getTotalSmsCost()).toFixed(2)



    //update the totals that is displayed on the screen.



    // console.log(totalCost);

    //color the total based on the criteria 
    colorUpdate()
}
addButtonSettings.addEventListener('click', addSettingsBillTotal)

function colorUpdate() {
    totalCostElem2.classList.remove('warning')
    totalCostElem2.classList.remove('danger')
    totalCostElem2.classList.add(billWithSettings.totalClassName())
}
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
