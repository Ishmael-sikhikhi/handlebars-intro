function textBills(){
    var smsTotalBill = 0;
    var callTotalBill = 0;

    function setBillType(typeOfBill){
        if (typeOfBill === 'call'){
            callTotalBill += 2.75;
        }
        else if (typeOfBill === 'sms'){
            smsTotalBill += 0.75;
        }
        return (callTotalBill + smsTotalBill).toFixed(2);
    }
    
    function getCallTotalCost(){
        return callTotalBill.toFixed(2);
    }
    function getSmsTotalCost(){
        return smsTotalBill.toFixed(2);
    }

    function totalClassName(){
        if ((callTotalBill + smsTotalBill) >= 50){
            return 'danger';
        }
        else if ((callTotalBill + smsTotalBill) >= 30){
            return 'warning';
        }
    }
    return {
        setBillType,
        getCallTotalCost,
        getSmsTotalCost,
        totalClassName
    }
}