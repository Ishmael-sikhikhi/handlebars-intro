function registrations() {


    var regN = ''
    function setReg(reg) {
        if (reg) {                regN = reg
             
        }

    }

    
    function filterFunction(town, regList) {
        var arrayList = []
        for (var i = 0; i < regList.length; i++) {
            if (regList[i].startsWith(town)) {
                arrayList.push(regList[i])
            }
        }
        return arrayList;
    }

    return {
        setReg,
        filterFunction,
    }
}