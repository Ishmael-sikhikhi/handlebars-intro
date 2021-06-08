function RadioBills(){
    
    var callTotalradioCost = 0;
    var smsTotalradioCost = 0;
    
    function selectRadioBill(typeOfBill){
        var billType = typeOfBill;
        if (billType === 'call'){
            callTotalradioCost += 2.75;
        }
        else if (billType === 'sms'){
            smsTotalradioCost += 0.75;
        }
        return (callTotalradioCost + smsTotalradioCost).toFixed(2);
    }

    function getCallTotalradioCost(){
        return callTotalradioCost.toFixed(2);
    }
    function getSmsTotalradioCost(){
        return smsTotalradioCost.toFixed(2);
    }

    /*function getTotalCost(){
        return callTotalradioCost + smsTotalradioCost;
    }*/

    function totalClassName(){
        if ((callTotalradioCost + smsTotalradioCost) >= 50){
            return 'danger';
        }
        else if ((callTotalradioCost + smsTotalradioCost) >= 30){
            return 'warning';
        }
    }
    return {
        selectRadioBill,
        // getTotalCost,
        totalClassName,
        getCallTotalradioCost,
        getSmsTotalradioCost
    }
}