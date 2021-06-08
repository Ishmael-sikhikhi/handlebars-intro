function calculateBills(){
     
   
    function setTotal(smsCallBill){
        var billTotal = 0; 
        var billString = smsCallBill.split(',');

        for(var i = 0; i < billString.length; i++){
            var billItem = billString[i].trim();
            if (billItem === 'call'){
                billTotal += 2.75;
            }
            else if (billItem === 'sms'){
                billTotal += 0.75;
            }
        }
        return billTotal.toFixed(2);
    }
    // function getTotalCallCost(){
    //     return billTotal;
    // }

    // function getTotalSmsCost(){
    //     return billTotal;
    // }
    // function getTotalCost(){
    //     return billTotal;
    // }
    
    function totalClassName(smsCallBill){
        if (setTotal(smsCallBill) >= 30){
            return 'danger';
        }
        else if (setTotal(smsCallBill)>= 20  && setTotal(smsCallBill) < 30){
            return 'warning';
        }
    }
    return {               
        setTotal,
        // getTotalCost,
        // getTotalCallCost,
        // getTotalSmsCost,
        totalClassName
    }
}