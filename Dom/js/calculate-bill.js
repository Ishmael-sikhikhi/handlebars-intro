//get a reference to the calculate button
var calculateBtnEle = document.querySelector(".calculateBtn")
//get a reference to the billTotal element
var billTotalEle = document.querySelector(".billTotal")
//get a reference to the billString
var billStringEle = document.querySelector(".billString")

//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element
let theCalculateBill = calculateBills();
function calculateBtnClicked() {

    billTotalEle.innerHTML = theCalculateBill.setTotal(billStringEle.value);

    // billTotalEle.classList.remove("warning");
    // billTotalEle.classList.remove('danger');

    //round to two decimals
    billTotalEle.classList.remove('warning')
    billTotalEle.classList.remove('danger')
    billTotalEle.classList.add(theCalculateBill.totalClassName(billStringEle.value));
}
//link the function to a click event on the calculate button
calculateBtnEle.addEventListener('click', calculateBtnClicked);