let kpiTargets = {
    "data": 400,
    "log": 250,
    "shared": 50
}

let kpiMultipliers = {
    "PROD": 1,
    "PREPROD": 0.8,
    "QAS": 0.5,
    "DEV": 0.25,
    "TST": 0.25,
    "SBX": 0.10,
    "DR": 0.01,
    "OTHER": 2
}

let runningLogicalTotal = {
    "P1": 0.0,
    "P2": 0.0,
    "P3": 0.0,
    "P4": 0.0,
    "P5": 0.0,
    "P6": 0.0,
    "P7": 0.0,
    "P8": 0.0,
    "P9": 0.0
}

let runningAddSnapshotTotal = {
    "P1": 0.0,
    "P2": 0.0,
    "P3": 0.0,
    "P4": 0.0,
    "P5": 0.0,
    "P6": 0.0,
    "P7": 0.0,
    "P8": 0.0,
    "P9": 0.0
}

let runningTotalCapacity = {
    "P1": 0.0,
    "P2": 0.0,
    "P3": 0.0,
    "P4": 0.0,
    "P5": 0.0,
    "P6": 0.0,
    "P7": 0.0,
    "P8": 0.0,
    "P9": 0.0
}

let runningPerformance = {
    "P1": 0.0,
    "P2": 0.0,
    "P3": 0.0,
    "P4": 0.0,
    "P5": 0.0,
    "P6": 0.0,
    "P7": 0.0,
    "P8": 0.0,
    "P9": 0.0
}

let runningSnapshotSpace = {
    "P1": 0.0,
    "P2": 0.0,
    "P3": 0.0,
    "P4": 0.0,
    "P5": 0.0,
    "P6": 0.0,
    "P7": 0.0,
    "P8": 0.0,
    "P9": 0.0
}

let runningAnfCosts = {
    "P1": 0.0,
    "P2": 0.0,
    "P3": 0.0,
    "P4": 0.0,
    "P5": 0.0,
    "P6": 0.0,
    "P7": 0.0,
    "P8": 0.0,
    "P9": 0.0
}

function resetTables() {
    let tbodyRef = document.getElementById('anfVolumeTCO').getElementsByTagName('tbody')[0];
    tbodyRef.innerHTML = "";
    tbodyRef = document.getElementById('poolGroup-requirements').getElementsByTagName('tbody')[0];
    tbodyRef.innerHTML = "";
    tbodyRef = document.getElementById('volume-list').getElementsByTagName('tbody')[0];
    tbodyRef.innerHTML = "";
    runningLogicalTotal = {
        "P1": 0.0,
        "P2": 0.0,
        "P3": 0.0,
        "P4": 0.0,
        "P5": 0.0,
        "P6": 0.0,
        "P7": 0.0,
        "P8": 0.0,
        "P9": 0.0
    }
    
    runningAddSnapshotTotal = {
        "P1": 0.0,
        "P2": 0.0,
        "P3": 0.0,
        "P4": 0.0,
        "P5": 0.0,
        "P6": 0.0,
        "P7": 0.0,
        "P8": 0.0,
        "P9": 0.0
    }
    
    runningTotalCapacity = {
        "P1": 0.0,
        "P2": 0.0,
        "P3": 0.0,
        "P4": 0.0,
        "P5": 0.0,
        "P6": 0.0,
        "P7": 0.0,
        "P8": 0.0,
        "P9": 0.0
    }
    
    runningPerformance = {
        "P1": 0.0,
        "P2": 0.0,
        "P3": 0.0,
        "P4": 0.0,
        "P5": 0.0,
        "P6": 0.0,
        "P7": 0.0,
        "P8": 0.0,
        "P9": 0.0
    }
    
    runningSnapshotSpace = {
        "P1": 0.0,
        "P2": 0.0,
        "P3": 0.0,
        "P4": 0.0,
        "P5": 0.0,
        "P6": 0.0,
        "P7": 0.0,
        "P8": 0.0,
        "P9": 0.0
    }
    
    runningAnfCosts = {
        "P1": 0.0,
        "P2": 0.0,
        "P3": 0.0,
        "P4": 0.0,
        "P5": 0.0,
        "P6": 0.0,
        "P7": 0.0,
        "P8": 0.0,
        "P9": 0.0
    }
}

let masterInput = [];

let inputId = 0000;

let standardGiBPrice = 0.14746;
let premiumGiBPrice = 0.29419;
let ultraGiBPrice = 0.39274;

function addSystem(inputJson){
    if(arguments.length == 0){
        // get the values from the form
        var sysSid = document.getElementById("sys-sid").value;
        var sysDescription = document.getElementById("sys-description").value;
        var sysRamSize = document.getElementById("sys-ram").value;
        var sysEnv = document.getElementById("sys-env").value;
        var sysHA = document.getElementById("sys-ha").value;
        var sysHostCount = document.getElementById("host-count").value;
        var sysPool = document.getElementById("sys-pool").value;
    }else{
        // get the values from the json
        var sysSid = inputJson.inputSid;
        var sysDescription = inputJson.inputDescription;
        var sysRamSize = inputJson.inputRamSize;
        var sysEnv = inputJson.inputEnv;
        var sysHA = inputJson.inputHA;
        var sysHostCount = inputJson.inputHostCount;
        var sysPool = inputJson.inputPool;
    };

    // add to input json for export
    inputObject = {
        "inputId": inputId,
        "inputType": "system",
        "inputSid": sysSid,
        "inputDescription": sysDescription,
        "inputRamSize": sysRamSize,
        "inputEnv": sysEnv,
        "inputHA": sysHA,
        "inputHostCount": sysHostCount,
        "inputPool": sysPool
    };

    inputId++;
    masterInput.push(inputObject);
    
    // if they select ha, we process the entire list twice, one for primary zone and one for secondary zone
    for (let ha = 1; ha <= sysHA; ha++) {

        if(ha == 2) {
            sidDisplayed = sysSid + "-HA";
        }else{
            sidDisplayed = sysSid;
        }

        for (let host = 1; host <= sysHostCount; host++) {
        
            // calculate
            let dataGiB = sysRamSize * 1.0;
            let dataPerf = kpiTargets["data"] * kpiMultipliers[sysEnv];
            let dataFreeSpace = dataGiB / 2;
            let dataDailyChangeRate = 30;
            let dataSnapshotRetentionDays = 3;
            let dataSnapshotSize = (dataGiB / 2) * (dataDailyChangeRate / 100) * dataSnapshotRetentionDays;
            let dataAddSnapshotSpace = Math.max(dataSnapshotSize - dataFreeSpace, 0);
            let dataTotalSpace = dataGiB + dataAddSnapshotSpace;

            // add to running totals
            runningLogicalTotal[sysPool] += dataGiB;
            runningAddSnapshotTotal[sysPool] += dataAddSnapshotSpace;
            runningTotalCapacity[sysPool] += dataTotalSpace;
            runningPerformance[sysPool] += dataPerf;
            runningSnapshotSpace[sysPool] += dataSnapshotSize;

            // create new row in the volume table, data
            var tbodyRef = document.getElementById('volume-list').getElementsByTagName('tbody')[0];
            var dataRow = tbodyRef.insertRow();

            // create new cells in the new row
            var dataRowDescription = dataRow.insertCell(0);
            var dataRowSID = dataRow.insertCell(1);
            var dataRowEnv = dataRow.insertCell(2);
            var dataRowPool = dataRow.insertCell(3);
            var dataRowType = dataRow.insertCell(4);
            var dataRowHost = dataRow.insertCell(5);
            var dataRowLogical = dataRow.insertCell(6);
            var dataRowAddSnapshot = dataRow.insertCell(7);
            var dataRowRequiredCapacity = dataRow.insertCell(8);
            var dataRowRequiredPerformance = dataRow.insertCell(9);
            var dataRowDailyChangeRate = dataRow.insertCell(10);
            var dataRowSnapshotRetentionDays = dataRow.insertCell(11);
            var dataRowSnapshotSize = dataRow.insertCell(12);
            var dataRowFreeSpace = dataRow.insertCell(13);

            dataRowDescription.innerHTML = sysDescription;
            dataRowSID.innerHTML = sidDisplayed;
            dataRowEnv.innerHTML = sysEnv;
            dataRowPool.innerHTML = sysPool;
            dataRowType.innerHTML = "data";
            dataRowHost.innerHTML = host;
            dataRowLogical.innerHTML = dataGiB;
            dataRowAddSnapshot.innerHTML = dataAddSnapshotSpace;
            dataRowRequiredCapacity.innerHTML = dataTotalSpace;
            dataRowRequiredPerformance.innerHTML = dataPerf;
            dataRowDailyChangeRate.innerHTML = dataDailyChangeRate;
            dataRowSnapshotRetentionDays.innerHTML = dataSnapshotRetentionDays;
            dataRowSnapshotSize.innerHTML = dataSnapshotSize;
            dataRowFreeSpace.innerHTML = dataFreeSpace;
        }

        for (let host = 1; host <= sysHostCount; host++) {

        // calculate
        let logGiB = Math.min(sysRamSize * 1.0, 512);
        let logPerf = kpiTargets["log"] * kpiMultipliers[sysEnv];
        let logFreeSpace = 0;
        let logDailyChangeRate = 0;
        let logSnapshotRetentionDays = 0;
        let logSnapshotSize = 0;
        let logAddSnapshotSpace = 0;
        let logTotalSpace = logGiB + logAddSnapshotSpace;

        // add to running totals
        runningLogicalTotal[sysPool] += logGiB;
        runningAddSnapshotTotal[sysPool] += logAddSnapshotSpace;
        runningTotalCapacity[sysPool] += logTotalSpace;
        runningPerformance[sysPool] += logPerf;
        runningSnapshotSpace[sysPool] += logSnapshotSize;

        // create new row in the volume table, data
        var tbodyRef = document.getElementById('volume-list').getElementsByTagName('tbody')[0];
        var logRow = tbodyRef.insertRow();

        // create new cells in the new row
        var logRowDescription = logRow.insertCell(0);
        var logRowSID = logRow.insertCell(1);
        var logRowEnv = logRow.insertCell(2);
        var logRowPool = logRow.insertCell(3);
        var logRowType = logRow.insertCell(4);
        var logRowHost = logRow.insertCell(5);
        var logRowLogical = logRow.insertCell(6);
        var logRowAddSnapshot = logRow.insertCell(7);
        var logRowRequiredCapacity = logRow.insertCell(8);
        var logRowRequiredPerformance = logRow.insertCell(9);
        var logRowDailyChangeRate = logRow.insertCell(10);
        var logRowSnapshotRetentionDays = logRow.insertCell(11);
        var logRowSnapshotSize = logRow.insertCell(12);
        var logRowFreeSpace = logRow.insertCell(13);

        logRowDescription.innerHTML = sysDescription;
        logRowSID.innerHTML = sidDisplayed;
        logRowEnv.innerHTML = sysEnv;
        logRowPool.innerHTML = sysPool;
        logRowType.innerHTML = "log";
        logRowHost.innerHTML = host;
        logRowLogical.innerHTML = logGiB;
        logRowAddSnapshot.innerHTML = logAddSnapshotSpace;
        logRowRequiredCapacity.innerHTML = logTotalSpace;
        logRowRequiredPerformance.innerHTML = logPerf;
        logRowDailyChangeRate.innerHTML = logDailyChangeRate;
        logRowSnapshotRetentionDays.innerHTML = logSnapshotRetentionDays;
        logRowSnapshotSize.innerHTML = logSnapshotSize;
        logRowFreeSpace.innerHTML = logFreeSpace;
        }

        // calculate
        let sharedGiB = Math.min(sysRamSize * 1.0, 1024);
        let sharedPerf = kpiTargets["shared"] * kpiMultipliers[sysEnv];
        let sharedFreeSpace = 0;
        let sharedDailyChangeRate = 2;
        let sharedSnapshotRetentionDays = 3;
        let sharedSnapshotSize = (sharedGiB) * (sharedDailyChangeRate / 100) * sharedSnapshotRetentionDays;
        let sharedAddSnapshotSpace = Math.max(sharedSnapshotSize - sharedFreeSpace, 0);
        let sharedTotalSpace = sharedGiB + sharedAddSnapshotSpace;

        // add to running totals
        runningLogicalTotal[sysPool] += sharedGiB;
        runningAddSnapshotTotal[sysPool] += sharedAddSnapshotSpace;
        runningTotalCapacity[sysPool] += sharedTotalSpace;
        runningPerformance[sysPool] += sharedPerf;
        runningSnapshotSpace[sysPool] += sharedSnapshotSize;

        // create new row in the volume table, data
        var tbodyRef = document.getElementById('volume-list').getElementsByTagName('tbody')[0];
        var sharedRow = tbodyRef.insertRow();

        // create new cells in the new row
        var sharedRowDescription = sharedRow.insertCell(0);
        var sharedRowSID = sharedRow.insertCell(1);
        var sharedRowEnv = sharedRow.insertCell(2);
        var sharedRowPool = sharedRow.insertCell(3);
        var sharedRowType = sharedRow.insertCell(4);
        var sharedRowHost = sharedRow.insertCell(5);
        var sharedRowLogical = sharedRow.insertCell(6);
        var sharedRowAddSnapshot = sharedRow.insertCell(7);
        var sharedRowRequiredCapacity = sharedRow.insertCell(8);
        var sharedRowRequiredPerformance = sharedRow.insertCell(9);
        var sharedRowDailyChangeRate = sharedRow.insertCell(10);
        var sharedRowSnapshotRetentionDays = sharedRow.insertCell(11);
        var sharedRowSnapshotSize = sharedRow.insertCell(12);
        var sharedRowFreeSpace = sharedRow.insertCell(13);

        sharedRowDescription.innerHTML = sysDescription;
        sharedRowSID.innerHTML = sidDisplayed;
        sharedRowEnv.innerHTML = sysEnv;
        sharedRowPool.innerHTML = sysPool;
        sharedRowType.innerHTML = "shared";
        sharedRowHost.innerHTML = "n/a";
        sharedRowLogical.innerHTML = sharedGiB;
        sharedRowAddSnapshot.innerHTML = sharedAddSnapshotSpace;
        sharedRowRequiredCapacity.innerHTML = sharedTotalSpace;
        sharedRowRequiredPerformance.innerHTML = sharedPerf;
        sharedRowDailyChangeRate.innerHTML = sharedDailyChangeRate;
        sharedRowSnapshotRetentionDays.innerHTML = sharedSnapshotRetentionDays;
        sharedRowSnapshotSize.innerHTML = sharedSnapshotSize;
        sharedRowFreeSpace.innerHTML = sharedFreeSpace;

    }
    // update the pool requirements table
    updatePoolRequirementsTable();
}

function addVolume(inputJson) {
    if(arguments.length == 0){
    // get the values from the form
        var volSid = document.getElementById("vol-sid").value;
        var volDescription = document.getElementById("vol-description").value;
        var volSize = document.getElementById("vol-size").value;
        var volThroughput = document.getElementById("vol-tPut").value;
        var volType = document.getElementById("vol-type").value;
        var volPool = document.getElementById("vol-pool").value;
        var volDailyChangeRate = parseFloat(document.getElementById("vol-changeRate").value);
    }else{
        var volSid = inputJson["inputSid"];
        var volDescription = inputJson["inputDescription"];
        var volSize = inputJson["inputVolSize"];
        var volThroughput = inputJson["inputThroughput"];
        var volType = inputJson["inputVolType"];
        var volPool = inputJson["inputPool"];
        var volDailyChangeRate = inputJson["inputDailyChangeRate"];
    }
    // add to input json for export
    inputObject = {
        "inputId": inputId,
        "inputType": "volume",
        "inputSid": volSid,
        "inputDescription": volDescription,
        "inputVolSize": volSize,
        "inputThroughput": volThroughput,
        "inputVolType": volType,
        "inputPool": volPool,
        "inputDailyChangeRate": volDailyChangeRate
    };

    inputId++;
    masterInput.push(inputObject);
    console.log(masterInput);


    // calculate
    let volGiB = parseFloat(volSize);
    let volPerf = parseFloat(volThroughput);
    let volSnapshotRetentionDays = 3;
    let volSnapshotSize = (volGiB) * (volDailyChangeRate / 100) * volSnapshotRetentionDays;
    let volAddSnapshotSpace = Math.max(volSnapshotSize, 0);
    let volTotalSpace = parseFloat(volGiB) + parseFloat(volAddSnapshotSpace);

    // add to running totals
    runningLogicalTotal[volPool] += volGiB;
    runningAddSnapshotTotal[volPool] += volAddSnapshotSpace;
    runningTotalCapacity[volPool] += volTotalSpace;
    runningPerformance[volPool] += volPerf;
    runningSnapshotSpace[volPool] += volSnapshotSize;

    // create new row in the volume table, data
    var tbodyRef = document.getElementById('volume-list').getElementsByTagName('tbody')[0];
    var volRow = tbodyRef.insertRow();

    // create new cells in the new row
    var volRowDescription = volRow.insertCell(0);
    var volRowSID = volRow.insertCell(1);
    var volRowEnv = volRow.insertCell(2);
    var volRowPool = volRow.insertCell(3);
    var volRowType = volRow.insertCell(4);
    var volRowHost = volRow.insertCell(5);
    var volRowLogical = volRow.insertCell(6);
    var volRowAddSnapshot = volRow.insertCell(7);
    var volRowRequiredCapacity = volRow.insertCell(8);
    var volRowRequiredPerformance = volRow.insertCell(9);
    var volRowDailyChangeRate = volRow.insertCell(10);
    var volRowSnapshotRetentionDays = volRow.insertCell(11);
    var volRowSnapshotSize = volRow.insertCell(12);
    var volRowFreeSpace = volRow.insertCell(13);

    volRowDescription.innerHTML = volDescription;
    volRowSID.innerHTML = volSid;
    volRowEnv.innerHTML = volType;
    volRowPool.innerHTML = volPool;
    volRowType.innerHTML = "";
    volRowHost.innerHTML = "";
    volRowLogical.innerHTML = volGiB;
    volRowAddSnapshot.innerHTML = volAddSnapshotSpace;
    volRowRequiredCapacity.innerHTML = volTotalSpace;
    volRowRequiredPerformance.innerHTML = volPerf;
    volRowDailyChangeRate.innerHTML = volDailyChangeRate;
    volRowSnapshotRetentionDays.innerHTML = volSnapshotRetentionDays;
    volRowSnapshotSize.innerHTML = volSnapshotSize;
    volRowFreeSpace.innerHTML = "0";

    // update the pool requirements table
    updatePoolRequirementsTable();
}

function updatePoolRequirementsTable() {
    var tbodyRef = document.getElementById('poolGroup-requirements').getElementsByTagName('tbody')[0];
    tbodyRef.innerHTML = '';
    for (const [key, value] of Object.entries(runningLogicalTotal)) {
        if (runningTotalCapacity[key] > 0) {
            var poolGroupRow = tbodyRef.insertRow();
            var poolGroupRowPool = poolGroupRow.insertCell(0);
            var poolGroupRowLogical = poolGroupRow.insertCell(1);
            var poolGroupRowAddSnapshot = poolGroupRow.insertCell(2);
            var poolGroupRowRequiredCapacity = poolGroupRow.insertCell(3);
            var poolGroupRowRequiredPerformance = poolGroupRow.insertCell(4);
            var poolGroupRowSnapshotSize = poolGroupRow.insertCell(5);
            poolGroupRowPool.innerHTML = key;
            poolGroupRowLogical.innerHTML = (runningLogicalTotal[key]/1024).toFixed(2);
            poolGroupRowAddSnapshot.innerHTML = (runningAddSnapshotTotal[key]/1024).toFixed(2);
            poolGroupRowRequiredCapacity.innerHTML = (runningTotalCapacity[key]/1024).toFixed(2);
            poolGroupRowRequiredPerformance.innerHTML = runningPerformance[key].toFixed(2);
            poolGroupRowSnapshotSize.innerHTML = (runningSnapshotSpace[key]/1024).toFixed(2); 
        }
    }
    updatePoolAnfTcoTable();
}

function updatePoolAnfTcoTable() {
    totalAnfCost = 0;
    totalAnfCapacity = 0;
    var tbodyRef = document.getElementById('anfVolumeTCO').getElementsByTagName('tbody')[0];
    tbodyRef.innerHTML = '';
    for (const [key, value] of Object.entries(runningLogicalTotal)) {
        if (runningTotalCapacity[key] > 0) {
            ceilTiBCapacity = Math.ceil(runningTotalCapacity[key] / 1024);
            standardTiBNeededForPerformance = Math.ceil(runningPerformance[key] / 16);
            premiumTiBNeededForPerformance = Math.ceil(runningPerformance[key] / 64);
            ultraTiBNeededForPerformance = Math.ceil(runningPerformance[key] / 128);
            if(standardTiBNeededForPerformance > ceilTiBCapacity){
                standardCost = standardTiBNeededForPerformance * 1024 * standardGiBPrice;
                standardSizedForPerformance = true;
                standardDisplayedCapacity = standardTiBNeededForPerformance;
            }else{
                standardCost = ceilTiBCapacity * 1024 * standardGiBPrice;
                standardSizedForPerformance = false;
                standardDisplayedCapacity = ceilTiBCapacity;
            }
            if(premiumTiBNeededForPerformance > ceilTiBCapacity){
                premiumCost = premiumTiBNeededForPerformance * 1024 * premiumGiBPrice;
                premiumSizedForPerformance = true;
                premiumDisplayedCapacity = premiumTiBNeededForPerformance;
            }else{
                premiumCost = ceilTiBCapacity * 1024 * premiumGiBPrice;
                premiumSizedForPerformance = false;
                premiumDisplayedCapacity = ceilTiBCapacity;
            }
            if(ultraTiBNeededForPerformance > ceilTiBCapacity){
                ultraCost = ultraTiBNeededForPerformance * 1024 * ultraGiBPrice;
                ultraSizedForPerformance = true;
                ultraDisplayedCapacity = ultraTiBNeededForPerformance;
            }else{
                ultraCost = ceilTiBCapacity * 1024 * ultraGiBPrice;
                ultraSizedForPerformance = false;
                ultraDisplayedCapacity = ceilTiBCapacity;
            }
    
            if(Math.min(standardCost, premiumCost, ultraCost) == standardCost){
                displayedCost = standardCost;
                sizedForPerformance = standardSizedForPerformance;
                displayedSize = standardDisplayedCapacity;
                displayedServiceLevel = "Standard";
                excessCapacity = standardDisplayedCapacity - (runningTotalCapacity[key] / 1024);
                excessPerformance = (standardDisplayedCapacity * 16) - runningPerformance[key];
            }else if(Math.min(standardCost, premiumCost, ultraCost) == premiumCost){
                displayedCost = premiumCost;
                sizedForPerformance = premiumSizedForPerformance;
                displayedSize = premiumDisplayedCapacity;
                displayedServiceLevel = "Premium";
                excessCapacity = premiumDisplayedCapacity - (runningTotalCapacity[key] / 1024);
                excessPerformance = (premiumDisplayedCapacity * 64) - runningPerformance[key];
            }else if(Math.min(standardCost, premiumCost, ultraCost) == ultraCost){
                displayedCost = ultraCost;
                sizedForPerformance = ultraSizedForPerformance;
                displayedSize = ultraDisplayedCapacity;
                displayedServiceLevel = "Ultra";
                excessCapacity = ultraDisplayedCapacity - (runningTotalCapacity[key] / 1024);
                excessPerformance = (ultraDisplayedCapacity * 128) - runningPerformance[key];
            }

            var anfTcoRow = tbodyRef.insertRow();
            var anfTcoRowPool = anfTcoRow.insertCell(0);
            var anfTcoRowServiceLevel = anfTcoRow.insertCell(1);
            var anfTcoRowCapacity = anfTcoRow.insertCell(2);
            var anfTcoRowCost = anfTcoRow.insertCell(3);
            var anfTcoRowSizing = anfTcoRow.insertCell(4);
            var anfTcoRowExcessCapacity = anfTcoRow.insertCell(5);
            var anfTcoRowExcessPerformance = anfTcoRow.insertCell(6);
            anfTcoRowPool.innerHTML = key;
            anfTcoRowServiceLevel.innerHTML = displayedServiceLevel;
            anfTcoRowCapacity.innerHTML = displayedSize;
            anfTcoRowCost.innerHTML = displayedCost.toFixed(2);
            totalAnfCost += displayedCost;
            totalAnfCapacity += displayedSize;
            if(sizedForPerformance == true){
                anfTcoRowSizing.innerHTML = "Performance";
            }else{
                anfTcoRowSizing.innerHTML = "Capacity";
            }
            anfTcoRowExcessCapacity.innerHTML = excessCapacity.toFixed(2); // will be calculated later
            anfTcoRowExcessPerformance.innerHTML = excessPerformance; // will be calculated later 
        }
    }
    var anfTcoRow = tbodyRef.insertRow();
    var anfTcoRowPool = anfTcoRow.insertCell(0);
    var anfTcoRowServiceLevel = anfTcoRow.insertCell(1);
    var anfTcoRowCapacity = anfTcoRow.insertCell(2);
    var anfTcoRowCost = anfTcoRow.insertCell(3);
    var anfTcoRowSizing = anfTcoRow.insertCell(4);
    var anfTcoRowExcessCapacity = anfTcoRow.insertCell(5);
    var anfTcoRowExcessPerformance = anfTcoRow.insertCell(6);
    anfTcoRowPool.innerHTML = "Total";
    anfTcoRowCapacity.innerHTML = totalAnfCapacity;
    anfTcoRowCost.innerHTML = totalAnfCost.toFixed(2);

}

function saveToBlob(){
let exportJson = {
    "settings": {
        "kpiBaseline": {
            "data": kpiTargets.data,
            "log": kpiTargets.log,
            "shared": kpiTargets.shared
        },
        "kpiMultipliers": {
            "prodPerf": kpiMultipliers.PROD,
            "preProdPerf": kpiMultipliers.PREPROD,
            "qasPerf": kpiMultipliers.QAS,
            "devPerf": kpiMultipliers.DEV,
            "tstPerf": kpiMultipliers.TST,
            "sbxPerf": kpiMultipliers.SBX,
            "drPerf": kpiMultipliers.DR,
            "otherPerf": kpiMultipliers.OTHER
        },
    },
    "input": masterInput
}

let exportName = document.getElementById("fileName").value;
var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportJson));
var downloadAnchorNode = document.createElement('a');
downloadAnchorNode.setAttribute("href",     dataStr);
downloadAnchorNode.setAttribute("download", exportName + ".json");
document.body.appendChild(downloadAnchorNode); // required for firefox
downloadAnchorNode.click();
downloadAnchorNode.remove();
}

function updateKpiMultipliers(settings){
    resetTables();
    if(arguments.length == 0){
        newDataBaseline = document.getElementById("dataBaseline").value;
        newLogBaseline = document.getElementById("logBaseline").value;
        newSharedBaseline = document.getElementById("sharedBaseline").value;

        newProdPerfMultiplier = document.getElementById("prodPerf").value/100;
        newPreProdPerfMultiplier = document.getElementById("preProdPerf").value/100;
        newQasPerfMultiplier = document.getElementById("qasPerf").value/100;
        newDevPerfMultiplier = document.getElementById("devPerf").value/100;
        newTstPerfMultiplier = document.getElementById("tstPerf").value/100;
        newSbxPerfMultiplier = document.getElementById("sbxPerf").value/100;
        newDrPerfMultiplier = document.getElementById("drPerf").value/100;
        newOtherPerfMultiplier = document.getElementById("otherPerf").value/100;
        
        kpiTargets = {
            "data": newDataBaseline,
            "log": newLogBaseline,
            "shared": newSharedBaseline
        }

        kpiMultipliers = {
            "PROD": newProdPerfMultiplier,
            "PREPROD": newPreProdPerfMultiplier,
            "QAS": newQasPerfMultiplier,
            "DEV": newDevPerfMultiplier,
            "TST": newTstPerfMultiplier,
            "SBX": newSbxPerfMultiplier,
            "DR": newDrPerfMultiplier,
            "OTHER": newOtherPerfMultiplier
        }
        updateTables(masterInput);
    }else{
        newDataBaseline = settings.kpiBaseline.data;
        newLogBaseline = settings.kpiBaseline.log;
        newSharedBaseline = settings.kpiBaseline.shared;

        newProdPerfMultiplier = settings.kpiMultipliers.prodPerf;
        newPreProdPerfMultiplier = settings.kpiMultipliers.preProdPerf;
        newQasPerfMultiplier = settings.kpiMultipliers.qasPerf;
        newDevPerfMultiplier = settings.kpiMultipliers.devPerf;
        newTstPerfMultiplier = settings.kpiMultipliers.tstPerf;
        newSbxPerfMultiplier = settings.kpiMultipliers.sbxPerf;
        newDrPerfMultiplier = settings.kpiMultipliers.drPerf;
        newOtherPerfMultiplier = settings.kpiMultipliers.otherPerf;

        kpiTargets = {
            "data": newDataBaseline,
            "log": newLogBaseline,
            "shared": newSharedBaseline
        }

        kpiMultipliers = {
            "PROD": newProdPerfMultiplier,
            "PREPROD": newPreProdPerfMultiplier,
            "QAS": newQasPerfMultiplier,
            "DEV": newDevPerfMultiplier,
            "TST": newTstPerfMultiplier,
            "SBX": newSbxPerfMultiplier,
            "DR": newDrPerfMultiplier,
            "OTHER": newOtherPerfMultiplier
        }

        document.getElementById("dataBaseline").value = newDataBaseline;
        document.getElementById("logBaseline").value = newLogBaseline;
        document.getElementById("sharedBaseline").value = newSharedBaseline;

        document.getElementById("prodPerf").value = newProdPerfMultiplier*100;
        document.getElementById("preProdPerf").value = newPreProdPerfMultiplier*100;
        document.getElementById("qasPerf").value = newQasPerfMultiplier*100;
        document.getElementById("devPerf").value = newDevPerfMultiplier*100;
        document.getElementById("tstPerf").value = newTstPerfMultiplier*100;
        document.getElementById("sbxPerf").value = newSbxPerfMultiplier*100;
        document.getElementById("drPerf").value = newDrPerfMultiplier*100;
        document.getElementById("otherPerf").value = newOtherPerfMultiplier*100;

    }
}

function updateTables(jsonInput){
    masterInput = [];
    jsonInput.forEach(element => {
        if(element.inputType == "system"){
            addSystem(element);
        }else if(element.inputType == "volume"){
            addVolume(element);
        }
    });
}

function loadConfig() {
    var files = document.getElementById('selectFiles').files;
    console.log(files);
    if (files.length <= 0) {
        return false;
    }

    var fr = new FileReader();

    fr.onload = function(e) { 
        console.log(e);
        var result = JSON.parse(e.target.result);
        var formatted = JSON.stringify(result, null, 2);
        document.getElementById('result').value = formatted;
        
        
    }
    fr.readAsText(files.item(0));
};

function importConfig(){
    let result = JSON.parse(document.getElementById('result').value);
    console.log(result);
    updateKpiMultipliers(result.settings);
    updateTables(result.input);
}


