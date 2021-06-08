function BillWithSethings() {
    var theCallCost = 0;
    var theSmsCost = 0;
    var theWarningLevel = 0;
    var theCriticalLevel = 0;
    var callCostTotal = 0;
    var smsCostTotal = 0;

    function setCallCost(callCost) {
        theCallCost = callCost;
        return theCallCost;
    }
    function getCallCost() {
        return theCallCost;
    }
    function setSmsCost(smsCost) {
        theSmsCost = smsCost;
        return theSmsCost;
    }
    function getSmsCost() {
        return theSmsCost;
    }
    function setWarningLevel(warningLevel) {
        theWarningLevel = warningLevel;
    }
    function getWarningLevel() {
        return theWarningLevel;
    }
    function setCriticalLevel(criticalLevel) {
        theCriticalLevel = criticalLevel;
        return theCriticalLevel;
    }
    function getCriticalLevel() {
        return theCriticalLevel;
    }
    function hasReachedCriticalLevel(){
        return getTotalCost() >= getCriticalLevel();
    }
    function makeCall(){
        if(!hasReachedCriticalLevel()){
            callCostTotal +=theCallCost;
        }
    }
    function addTotalCost(bill){
        if(bill === 'call'){
            makeCall();
        }
        else if(bill === 'sms'){
            sendSms();
        }
    }
    function sendSms(){
        if(!hasReachedCriticalLevel()){
            smsCostTotal += theSmsCost;
        }
    }
    function getTotalCallCost(){
        return callCostTotal; 
    }
    function getTotalSmsCost(){
        return smsCostTotal;
    }

    function getTotalCost(){
        return callCostTotal + smsCostTotal;
    }
    function totalClassName(){
        if (hasReachedCriticalLevel()){
            return 'danger';
        }
        else if (getTotalCost() >= getWarningLevel()){
            return 'warning';
        }
    }
   
    return {
        setCallCost,
        getCallCost,
        setSmsCost,
        getSmsCost,
        setWarningLevel,
        getWarningLevel,
        setCriticalLevel,
        getCriticalLevel,
        makeCall,
        addTotalCost,
        getTotalCost,
        getTotalCallCost,
        getTotalSmsCost,
        sendSms,
        totalClassName,
        hasReachedCriticalLevel
    }
}