var map;
var controls;
var displayedList = [];
var regionlocation = {
    australiacentral: [149.1144, -35.3075],
    australiacentral2: [149.1344, -35.3075],
    australiaeast: [151.2094, -33.86],
    australiasoutheast: [144.9631, -37.8136],
    brazilsouth: [-46.633, -23.55],
    canadacentral: [-79.383, 43.653],
    canadaeast: [-71.217, 46.817],
    centralindia: [73.9197, 18.5822],
    centralus: [-93.6208, 41.5908],
    eastasia: [114.188, 22.267],
    eastus: [-79.8164, 37.3719],
    eastus2: [-78.3889, 36.6681],
    francecentral: [2.3730, 46.3772],
    germanynorth: [8.806422, 53.073635],
    germanywestcentral: [8.682127, 50.110924],
    japaneast: [139.77, 35.68],
    japanwest: [135.5022, 34.6939],
    koreacentral: [126.9780, 37.5665],
    koreasouth: [129.0756, 35.1796],
    northcentralus: [-87.6278, 41.8819],
    northeurope: [-6.2597, 53.3478],
    norwayeast: [10.752245, 59.913868],
    norwaywest: [ 5.733107, 58.969975],
    southafricanorth: [28.21837, -25.73134],
    southcentralus: [-98.5, 29.4167],
    southeastasia: [103.833, 1.283],
    southindia: [80.1636, 12.9822],
    swedencentral: [17.14127, 60.67488],
    switzerlandnorth: [8.564572,47.451542],
    switzerlandwest: [6.143158,46.204391],
    uaecentral: [54.366669, 24.466667],
    uaenorth: [55.316666, 25.266666],
    uksouth: [-0.799, 50.941],
    ukwest: [-3.084, 53.427],
    usgovarizona: [-111.7046, 34.42527],
    usgovvirginia: [-78.39411, 37.623159],
    usgovtexas: [-99.208076, 31.56443],
    westeurope: [4.9, 52.3667],
    westus: [-122.417, 37.783],
    westus2: [-119.852, 47.233],
    westus3: [-112.074036, 33.448376]
};
var regionlist = [
    {
        "shortname": "australiacentral",
        "longname": "Australia Central",
        "location": regionlocation.australiacentral,
        "crrregions": ["australiacentral2"],
        "snf": true,
        "avsdatastore": false,
        "backup": false,
        "largevolumes": false
    },
    {
        "shortname": "australiacentral2",
        "longname": "Australia Central 2",
        "location": regionlocation.australiacentral2,
        "crrregions": ["australiacentral"],
        "snf": true,
        "avsdatastore": false,
        "backup": false,
        "largevolumes": false
    },
    {
        "shortname": "australiaeast",
        "longname": "Australia East",
        "location": regionlocation.australiaeast,
        "crrregions": ["australiasoutheast","southeastasia"],
        "snf": true,
        "avsdatastore": true,
        "backup": true,
        "largevolumes": true
    },
    {
        "shortname": "australiasoutheast",
        "longname": "Australia Southeast",
        "location": regionlocation.australiasoutheast,
        "crrregions": ["australiaeast"],
        "snf": true,
        "avsdatastore": true,
        "backup": false,
        "largevolumes": true
    },
    {
        "shortname": "brazilsouth",
        "longname": "Brazil South",
        "location": regionlocation.brazilsouth,
        "crrregions": ["southcentralus"],
        "snf": true,
        "avsdatastore": true,
        "backup": false,
        "largevolumes": true
    },
    {
        "shortname": "canadacentral",
        "longname": "Canada Central",
        "location": regionlocation.canadacentral,
        "crrregions": ["canadaeast"],
        "snf": true,
        "avsdatastore": true,
        "backup": false,
        "largevolumes": true
    },
    {
        "shortname": "canadaeast",
        "longname": "Canada East",
        "location": regionlocation.canadaeast,
        "crrregions": ["canadacentral"],
        "snf": false,
        "avsdatastore": true,
        "backup": true,
        "largevolumes": false
    },
    {
        "shortname": "centralindia",
        "longname": "Central India",
        "location": regionlocation.centralindia,
        "crrregions": ["southindia"],
        "snf": false,
        "avsdatastore": false,
        "backup": false,
        "largevolumes": false
    },
    {
        "shortname": "centralus",
        "longname": "Central US",
        "location": regionlocation.centralus,
        "crrregions": ["southcentralus","eastus2"],
        "snf": true,
        "avsdatastore": true,
        "backup": false,
        "largevolumes": true
    },
    {
        "shortname": "eastasia",
        "longname": "East Asia",
        "location": regionlocation.eastasia,
        "crrregions": ["southeastasia"],
        "snf": true,
        "avsdatastore": true,
        "backup": false,
        "largevolumes": false
    },
    {
        "shortname": "eastus",
        "longname": "East US",
        "location": regionlocation.eastus,
        "crrregions": ["westus","westus2","southcentralus","eastus2","westus3"],
        "snf": true,
        "avsdatastore": true,
        "backup": true,
        "largevolumes": true
    },
    {
        "shortname": "eastus2",
        "longname": "East US 2",
        "location": regionlocation.eastus2,
        "crrregions": ["southcentralus","centralus","eastus","northcentralus","westus2"],
        "snf": true,
        "avsdatastore": true,
        "backup": true,
        "largevolumes": true
    },
    {
        "shortname": "francecentral",
        "longname": "France Central",
        "location": regionlocation.francecentral,
        "crrregions": ["germanywestcentral","westeurope"],
        "snf": true,
        "avsdatastore": true,
        "backup": true,
        "largevolumes": false
    },
    {
        "shortname": "germanywestcentral",
        "longname": "Germany West Central",
        "location": regionlocation.germanywestcentral,
        "crrregions": ["uksouth","germanynorth","westeurope","francecentral"],
        "snf": true,
        "avsdatastore": true,
        "backup": true,
        "largevolumes": true
    },
    {
        "shortname": "germanynorth",
        "longname": "Germany North",
        "location": regionlocation.germanynorth,
        "crrregions": ["germanywestcentral"],
        "snf": true,
        "avsdatastore": false,
        "backup": false,
        "largevolumes": false
    },
    {
        "shortname": "japaneast",
        "longname": "Japan East",
        "location": regionlocation.japaneast,
        "crrregions": ["japanwest"],
        "snf": true,
        "avsdatastore": true,
        "backup": true,
        "largevolumes": true
    },
    {
        "shortname": "japanwest",
        "longname": "Japan West",
        "location": regionlocation.japanwest,
        "crrregions": ["japaneast"],
        "snf": true,
        "avsdatastore": true,
        "backup": false,
        "largevolumes": false
    },
    {
        "shortname": "koreacentral",
        "longname": "Korea Central",
        "location": regionlocation.koreacentral,
        "crrregions": ["koreasouth"],
        "snf": true,
        "avsdatastore": false,
        "backup": false,
        "largevolumes": false
    },
    {
        "shortname": "koreasouth",
        "longname": "Korea South",
        "location": regionlocation.koreasouth,
        "crrregions": ["koreacentral"],
        "snf": false,
        "avsdatastore": false,
        "backup": false,
        "largevolumes": false
    },
    {
        "shortname": "northcentralus",
        "longname": "North Central US",
        "location": regionlocation.northcentralus,
        "crrregions": ["eastus2","southcentralus"],
        "snf": true,
        "avsdatastore": true,
        "backup": false,
        "largevolumes": true
    },
    {
        "shortname": "northeurope",
        "longname": "North Europe",
        "location": regionlocation.northeurope,
        "crrregions": ["westeurope"],
        "snf": true,
        "avsdatastore": true,
        "backup": true,
        "largevolumes": true
    },
    {
        "shortname": "norwayeast",
        "longname": "Norway East",
        "location": regionlocation.norwayeast,
        "crrregions": ["norwaywest"],
        "snf": true,
        "avsdatastore": false,
        "backup": false,
        "largevolumes": false
    },
    {
        "shortname": "norwaywest",
        "longname": "Norway West",
        "location": regionlocation.norwaywest,
        "crrregions": ["norwayeast"],
        "snf": true,
        "avsdatastore": false,
        "backup": false,
        "largevolumes": false
    },
    {
        "shortname": "southafricanorth",
        "longname": "South Africa North",
        "location": regionlocation.southafricanorth,
        "crrregions": [],
        "snf": true,
        "avsdatastore": true,
        "backup": false,
        "largevolumes": false
    },
    {
        "shortname": "southcentralus",
        "longname": "South Central US",
        "location": regionlocation.southcentralus,
        "crrregions": ["centralus","eastus","eastus2","northcentralus","brazilsouth"],
        "snf": true,
        "avsdatastore": true,
        "backup": true,
        "largevolumes": true
    },
    {
        "shortname": "southindia",
        "longname": "South India",
        "location": regionlocation.southindia,
        "crrregions": ["centralindia"],
        "snf": true,
        "avsdatastore": false,
        "backup": false,
        "largevolumes": false
    },
    {
        "shortname": "southeastasia",
        "longname": "Southeast Asia",
        "location": regionlocation.southeastasia,
        "crrregions": ["australiaeast","eastasia"],
        "snf": true,
        "avsdatastore": true,
        "backup": true,
        "largevolumes": false
    },
    {
        "shortname": "swedencentral",
        "longname": "Sweden Central",
        "location": regionlocation.swedencentral,
        "crrregions": [],
        "snf": true,
        "avsdatastore": true,
        "backup": false,
        "largevolumes": false
    },
    {
        "shortname": "switzerlandnorth",
        "longname": "Switzerland North",
        "location": regionlocation.switzerlandnorth,
        "crrregions": ["switzerlandwest"],
        "snf": true,
        "avsdatastore": true,
        "backup": false,
        "largevolumes": true
    },
    {
        "shortname": "switzerlandwest",
        "longname": "Switzerland West",
        "location": regionlocation.switzerlandwest,
        "crrregions": ["switzerlandnorth"],
        "snf": false,
        "avsdatastore": true,
        "backup": false,
        "largevolumes": false
    },
    {
        "shortname": "uaecentral",
        "longname": "UAE Central",
        "location": regionlocation.uaecentral,
        "crrregions": ["uaenorth"],
        "snf": true,
        "avsdatastore": false,
        "backup": false,
        "largevolumes": false
    },
    {
        "shortname": "uaenorth",
        "longname": "UAE North",
        "location": regionlocation.uaenorth,
        "crrregions": ["uaecentral"],
        "snf": true,
        "avsdatastore": false,
        "backup": false,
        "largevolumes": true
    },
    {
        "shortname": "uksouth",
        "longname": "UK South",
        "location": regionlocation.uksouth,
        "crrregions": ["ukwest","germanywestcentral"],
        "snf": true,
        "avsdatastore": true,
        "backup": true,
        "largevolumes": true
    },
    {
        "shortname": "ukwest",
        "longname": "UK West",
        "location": regionlocation.ukwest,
        "crrregions": ["uksouth"],
        "snf": false,
        "avsdatastore": true,
        "backup": false,
        "largevolumes": true
    },
    {
        "shortname": "usgovarizona",
        "longname": "US Gov Arizona",
        "location": regionlocation.usgovarizona,
        "crrregions": ["usgovtexas","usgovvirginia"],
        "snf": false,
        "avsdatastore": false,
        "backup": false,
        "largevolumes": false
    },
    {
        "shortname": "usgovvirginia",
        "longname": "US Gov Virginia",
        "location": regionlocation.usgovvirginia,
        "crrregions": ["usgovtexas","usgovarizona"],
        "snf": false,
        "avsdatastore": false,
        "backup": false,
        "largevolumes": false
    },
    {
        "shortname": "usgovtexas",
        "longname": "US Gov Texas",
        "location": regionlocation.usgovtexas,
        "crrregions": ["usgovvirginia","usgovarizona"],
        "snf": false,
        "avsdatastore": false,
        "backup": false,
        "largevolumes": false
    },
    {
        "shortname": "westeurope",
        "longname": "West Europe",
        "location": regionlocation.westeurope,
        "crrregions": ["northeurope","germanywestcentral","francecentral"],
        "snf": true,
        "avsdatastore": true,
        "backup": true,
        "largevolumes": true
    },
    {
        "shortname": "westus",
        "longname": "West US",
        "location": regionlocation.westus,
        "crrregions": ["eastus"],
        "snf": true,
        "avsdatastore": true,
        "backup": true,
        "largevolumes": true
    },
    {
        "shortname": "westus2",
        "longname": "West US 2",
        "location": regionlocation.westus2,
        "crrregions": ["eastus","eastus2", "westus3"],
        "snf": true,
        "avsdatastore": true,
        "backup": true,
        "largevolumes": true
    },
    {
        "shortname": "westus3",
        "longname": "West US 3",
        "location": regionlocation.westus3,
        "crrregions": ["eastus", "westus2"],
        "snf": true,
        "avsdatastore": false,
        "backup": false,
        "largevolumes": true
    }
];

function minimizePanel() {
    document.getElementById("eventPanel").classList.add('hidden');
    document.getElementById("minimizedPanel").classList.remove('hidden');
}

function restorePanel() {
    document.getElementById("minimizedPanel").classList.add('hidden');
    document.getElementById("eventPanel").classList.remove('hidden');
}

var SNFregions = [];
regionlist.forEach(filterSNFregions);
//this function build an array based on which regions have 'snf' set to true
function filterSNFregions(item, index) {
    if (regionlist[index].snf == true) {
        SNFregions.push(regionlist[index])
    }
};

var CRRregions = [];
regionlist.forEach(filterCRRregions);
//this function build an array based on which regions have 'snf' set to true
function filterCRRregions(item, index) {
    if (regionlist[index].crrregions.length > 0) {
        CRRregions.push(regionlist[index])
    }
};

var AVSregions = [];
regionlist.forEach(filterAVSregions);
//this function build an array based on which regions have 'avs' set to true
function filterAVSregions(item, index) {
    if (regionlist[index].avsdatastore == true) {
        AVSregions.push(regionlist[index])
    }
};

var Backupregions = [];
regionlist.forEach(filterBackupregions);
//this function build an array based on which regions have 'backup' set to true
function filterBackupregions(item, index) {
    if (regionlist[index].backup == true) {
        Backupregions.push(regionlist[index])
    }
};

var Largevolumesregions = [];
regionlist.forEach(filterLargevolumesregions);
//this function build an array based on which regions have 'US Gov' set to true
function filterLargevolumesregions(item, index) {
    if (regionlist[index].largevolumes == true) {
        Largevolumesregions.push(regionlist[index])
    }
};

var USGovregions = [];
regionlist.forEach(filterUSGovregions);
//this function build an array based on which regions have 'US Gov' set to true
function filterUSGovregions(item, index) {
    const govLabel = 'US Gov';
    if (item.longname.indexOf(govLabel) >= 0) {
        USGovregions.push(regionlist[index])
    }
};

function initMap() {
    //Initialize a map instance.
    map = new atlas.Map('myMap', {
        center: [0, 0],
        zoom: 2,
        renderWorldCopies: false, 
        view: "Auto",
        style: "grayscale_light",
        authOptions: {
                    authType: 'subscriptionKey',
                    subscriptionKey: 'pRU8GPM_C5_5RK91QFK7jGoWm_DERX_pztOtdxlCI9M'
                }
    });
    controls = [];
    //Create a zoom control.
    controls.push(new atlas.control.ZoomControl());
    //Create a pitch control and add it to the map.
    controls.push(new atlas.control.PitchControl());
    //Create a compass control and add it to the map.
    controls.push(new atlas.control.CompassControl());
    //Create a style control and add it to the map.
    controls.push(new atlas.control.StyleControl());
    //Add controls to the map.
    map.controls.add(controls, {
        position: "top-right"
    });
        
    displayedList = regionlist;

    document.getElementById("totalRegionCount").innerHTML = '<a target="_blank" href="https://azure.microsoft.com/explore/global-infrastructure/products-by-region/?products=netapp&regions=all&rar=true">' + regionlist.length + '</a>'
    document.getElementById("snfRegionCount").innerHTML = '<a target="_blank" href="https://learn.microsoft.com/azure/azure-netapp-files/azure-netapp-files-network-topologies#supported-regions">' + SNFregions.length + '</a>'
    document.getElementById("crrRegionCount").innerHTML = '<a target="_blank" href="https://learn.microsoft.com/azure/azure-netapp-files/cross-region-replication-introduction#supported-region-pairs">' + CRRregions.length + '</a>'

    document.getElementById("avsRegionCount").innerHTML = '<a target="_blank" href="https://learn.microsoft.com/azure/azure-vmware/attach-azure-netapp-files-to-azure-vmware-solution-hosts?tabs=azure-portal#supported-regions">' + AVSregions.length + '</a>'
    document.getElementById("backupRegionCount").innerHTML = '<a target="_blank" href="https://learn.microsoft.com/azure/azure-netapp-files/backup-introduction#supported-regions">' + Backupregions.length + '</a>'
    document.getElementById("largevolumesRegionCount").innerHTML = '<a target="_blank" href="https://learn.microsoft.com/azure/azure-netapp-files/large-volumes-requirements-considerations#supported-regions">' + Largevolumesregions.length + '</a>'

    document.getElementById("USGovRegionCount").innerHTML = '<a target="_blank" href="https://azure.microsoft.com/explore/global-infrastructure/products-by-region/?products=netapp&regions=usgov-non-regional,us-dod-central,us-dod-east,usgov-arizona,usgov-texas,usgov-virginia&rar=true">' + USGovregions.length + '</a>'
    document.getElementById("totalFilteredCount").innerText = displayedList.length

    //Wait until the map resources are ready.
    map.events.add('ready', function () {
        //anfregions = new atlas.source.DataSource();
        //map.sources.add(anfregions);
        
        displayedList.forEach(createhtmlmarker);

        function createhtmlmarker(item, index) {
            var targetregions = item.crrregions;
            window[item.shortname] = new atlas.HtmlMarker({
                color: 'DodgerBlue',
                text: '10',
                position: item.location,
                htmlContent: "<div style='width:3em;'><img style='width:3em;' src='https://anftechteam.github.io/map/anficon.png'></div>",
                popup: new atlas.Popup({
                    content: '<div style="padding:10px;color:white"><strong>ANF Region: ' + item.longname + '</strong> (' + item.shortname + ')<br>CRR Targets: ' + targetregions + '<br>standard networking: ' + item.snf + '<br>ANF backup: ' + item.backup + '<br>AVS datastore: ' + item.avsdatastore + '<br>Latitude: ' + item.location[1] + '<br>Longitude: ' + item.location[0] + '<br>Source: <a style="color:LightBlue" href="https://azure.microsoft.com/en-us/global-infrastructure/services/?products=netapp&regions=all&rar=true">Microsoft</a></div>',
                    pixelOffset: [0, -50],
                    fillColor: 'rgba(0,0,0,0.6)'
                })
            });
            map.markers.add(window[item.shortname]);
            //Add a click event to toggle the popup.
            map.events.add('click',window[item.shortname], () => {
                window[item.shortname].togglePopup();
                if (targetregions) {
                    targetregions.forEach(targetregion => {
                        console.log(targetregion);
                        linename = item.shortname + '_' + targetregion;
                        layername = linename + '_layer';
                        if (typeof window[layername] != "undefined") {
                            existingoptions = window[layername].getOptions();
                            console.log(existingoptions);
                            if (existingoptions.visible == true) {
                                window[layername].setOptions({visible: false});
                            } else {
                                window[layername].setOptions({visible: true});
                            }
                        } else {
                        window[linename] = new atlas.source.DataSource(null, {lineMetrics: true});
                        map.sources.add(window[linename]);
                        console.log(linename);
                        targetlatlong = regionlocation[targetregion];
                        window[linename].add(new atlas.data.LineString([item.location, targetlatlong]));
                        //Create a line layer to render the line to the map.
                        window[layername] = new atlas.layer.LineLayer(window[linename], null, {
                            visible: true,
                            strokeWidth: 4,
                            strokeGradient: [
                                'interpolate',
                                ['linear'],
                                ['line-progress'],
                                0, "blue",
                                0.1, "royalblue",
                                0.4, "cyan",
                                0.6, "cyan",
                                0.9, "royalblue",
                                1, "blue"
                            ]
                        });
                        map.layers.add(window[layername]);
                    }
                    });
                
                }
            });
            map.events.add('mouseenter',window[item.shortname], () => {  
                window[item.shortname].togglePopup();
            });
            map.events.add('mouseleave',window[item.shortname], () => {
                window[item.shortname].togglePopup();
            });
        }
    });
}

function updateMap() {
    //remove all markers
    displayedList.forEach(element => {
        map.markers.remove(window[element.shortname])
    });
    displayedList = [];
    if (document.getElementById("snf").checked) {
        displayedList = SNFregions;
    } else {
        displayedList = regionlist;
    }
    if (document.getElementById("crr").checked) {
        CRRregions = [];
        displayedList.forEach(filterCRRregions);
        displayedList = CRRregions;
    }
    if (document.getElementById("avs").checked) {
        AVSregions = [];
        displayedList.forEach(filterAVSregions);
        displayedList = AVSregions;
    }
    if (document.getElementById("backup").checked) {
        Backupregions = [];
        displayedList.forEach(filterBackupregions);
        displayedList = Backupregions;
    }
    if (document.getElementById("largevolumes").checked) {
        Largevolumesregions = [];
        displayedList.forEach(filterLargevolumesregions);
        displayedList = Largevolumesregions;
    }
    if (document.getElementById("usgov").checked) {
        USGovregions = [];
        displayedList.forEach(filterUSGovregions);
        console.log(displayedList)
        console.log(USGovregions)
        displayedList = USGovregions;
    }

    document.getElementById("totalFilteredCount").innerText = displayedList.length

    desaturatedList = [];

    regionlist.forEach(element => {
        if (!displayedList.includes(element)) {
            desaturatedList.push(element)
        }
    });

    desaturatedList.forEach(createDesaturatedhtmlmarker);
    displayedList.forEach(createhtmlmarker);
    

    function createhtmlmarker(item, index) {
        var targetregions = item.crrregions;
        window[item.shortname] = new atlas.HtmlMarker({
            color: 'DodgerBlue',
            text: '10',
            position: item.location,
            htmlContent: "<div style='width:3em;'><img style='width:3em;' src='https://anftechteam.github.io/map/anficon.png'></div>",
            popup: new atlas.Popup({
                content: '<div style="padding:10px;color:white"><strong>ANF Region: ' + item.longname + '</strong> (' + item.shortname + ')<br>CRR Targets: ' + targetregions + '<br>standard networking: ' + item.snf + '<br>ANF backup: ' + item.backup + '<br>AVS datastore: ' + item.avsdatastore + '<br>Latitude: ' + item.location[1] + '<br>Longitude: ' + item.location[0] + '<br>Source: <a style="color:LightBlue" href="https://azure.microsoft.com/en-us/global-infrastructure/services/?products=netapp&regions=all&rar=true">Microsoft</a></div>',
                pixelOffset: [0, -50],
                fillColor: 'rgba(0,0,0,0.6)'
            })
        });
        map.markers.add(window[item.shortname]);
        //Add a click event to toggle the popup.
        map.events.add('click',window[item.shortname], () => {
            //window[item.shortname].togglePopup();
            if (targetregions) {
                targetregions.forEach(targetregion => {
                    linename = item.shortname + '_' + targetregion;
                    layername = linename + '_layer';
                    if (typeof window[layername] != "undefined") {
                        console.log("exists!");
                        existingoptions = window[layername].getOptions();
                        console.log(existingoptions);
                        if (existingoptions.visible == true) {
                            window[layername].setOptions({visible: false});
                        } else {
                            window[layername].setOptions({visible: true});
                        }
                    } else {
                    window[linename] = new atlas.source.DataSource(null, {lineMetrics: true});
                    map.sources.add(window[linename]);
                    console.log(linename);
                    var targetlatlong = regionlocation[targetregion];
                    window[linename].add(new atlas.data.LineString([item.location, targetlatlong]));
                    //Create a line layer to render the line to the map.
                    window[layername] = new atlas.layer.LineLayer(window[linename], null, {
                        visible: true,
                        strokeWidth: 4,
                        strokeGradient: [
                            'interpolate',
                            ['linear'],
                            ['line-progress'],
                            0, "blue",
                            0.1, "royalblue",
                            0.4, "cyan",
                            0.6, "cyan",
                            0.9, "royalblue",
                            1, "blue"
                        ]
                    });
                    map.layers.add(window[layername]);
                }
                });
            
            }
        });
        map.events.add('mouseenter',window[item.shortname], () => {  
            window[item.shortname].togglePopup();
        });
        map.events.add('mouseleave',window[item.shortname], () => {
            window[item.shortname].togglePopup();
        });
    }

    function createDesaturatedhtmlmarker(item, index) {
        var targetregions = item.crrregions;
        window[item.shortname] = new atlas.HtmlMarker({
            color: 'DodgerBlue',
            text: '10',
            position: item.location,
            htmlContent: "<div style='width:3em;'><img style='width:3em;' src='https://anftechteam.github.io/map/anficon_gray.png'></div>",
            popup: new atlas.Popup({
                content: '<div style="padding:10px;color:white"><strong>ANF Region: ' + item.longname + '</strong> (' + item.shortname + ')<br>CRR Targets: ' + targetregions + '<br>standard networking: ' + item.snf + '<br>ANF backup: ' + item.backup + '<br>AVS datastore: ' + item.avsdatastore + '<br>Latitude: ' + item.location[1] + '<br>Longitude: ' + item.location[0] + '<br>Source: <a style="color:LightBlue" href="https://azure.microsoft.com/en-us/global-infrastructure/services/?products=netapp&regions=all&rar=true">Microsoft</a></div>',
                pixelOffset: [0, -50],
                fillColor: 'rgba(0,0,0,0.6)'
            })
        });
        map.markers.add(window[item.shortname]);
        //Add a click event to toggle the popup.
        map.events.add('click',window[item.shortname], () => {
            //window[item.shortname].togglePopup();
            if (targetregions) {
                targetregions.forEach(targetregion => {
                    linename = item.shortname + '_' + targetregion;
                    layername = linename + '_layer';
                    if (typeof window[layername] != "undefined") {
                        console.log("exists!");
                        existingoptions = window[layername].getOptions();
                        console.log(existingoptions);
                        if (existingoptions.visible == true) {
                            window[layername].setOptions({visible: false});
                        } else {
                            window[layername].setOptions({visible: true});
                        }
                    } else {
                    window[linename] = new atlas.source.DataSource(null, {lineMetrics: true});
                    map.sources.add(window[linename]);
                    console.log(linename);
                    var targetlatlong = regionlocation[targetregion];
                    window[linename].add(new atlas.data.LineString([item.location, targetlatlong]));
                    //Create a line layer to render the line to the map.
                    window[layername] = new atlas.layer.LineLayer(window[linename], null, {
                        visible: true,
                        strokeWidth: 4,
                        strokeGradient: [
                            'interpolate',
                            ['linear'],
                            ['line-progress'],
                            0, "blue",
                            0.1, "royalblue",
                            0.4, "cyan",
                            0.6, "cyan",
                            0.9, "royalblue",
                            1, "blue"
                        ]
                    });
                    map.layers.add(window[layername]);
                }
                });
            
            }
        });
        map.events.add('mouseenter',window[item.shortname], () => {  
            window[item.shortname].togglePopup();
        });
        map.events.add('mouseleave',window[item.shortname], () => {
            window[item.shortname].togglePopup();
        });
    }

};



