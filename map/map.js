//https://github.com/Azure-Samples/AzureMapsGovCloudCodeSamples/blob/master/AzureMapsCodeSamples/Symbol%20Layer/Filter%20Symbols%20by%20Property.html

function GetMap(){

    //Initialize a map instance.
    var map = new atlas.Map('map', {
        center: [0, 0],
        zoom: 0,
        renderWorldCopies: true, 
        view: "Auto",
        style: "grayscale_light",
        authOptions: {
                    authType: 'subscriptionKey',
                    subscriptionKey: 'pRU8GPM_C5_5RK91QFK7jGoWm_DERX_pztOtdxlCI9M'
                }
    });

    map.controls.add([
        new atlas.control.ZoomControl(),
        new atlas.control.CompassControl(),
        new atlas.control.PitchControl(),
        new atlas.control.StyleControl()
    ], {
        position: "top-right"
    });

    //Wait until the map resources are ready.
    map.events.add('ready', function () {

    anfregions = new atlas.source.DataSource();
    
    map.sources.add(anfregions);

    var regionlocation = {
        australiaeast: [151.2094, -33.86],
        australiacentral: [149.1244, -35.3075],
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
        germanywestcentral: [8.682127, 50.110924],
        germanynorth: [8.806422, 53.073635],
        japaneast: [139.77, 35.68],
        japanwest: [135.5022, 34.6939],
        koreacentral: [126.9780, 37.5665],
        northcentralus: [-87.6278, 41.8819],
        northeurope: [-6.2597, 53.3478],
        norwayeast: [10.752245, 59.913868],
        norwaywest: [ 5.733107, 58.969975],
        southcentralus: [-98.5, 29.4167],
        southindia: [80.1636, 12.9822],
        southeastasia: [103.833, 1.283],
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
        westus2: [-119.852, 47.233]
    };

    var regionlist = [
        {
            "shortname": "australiaeast",
            "longname": "Australia East",
            "location": regionlocation.australiaeast,
            "crrregions": ["australiasoutheast","southeastasia"]
        },
        {
            "shortname": "australiacentral",
            "longname": "Australia Central",
            "location": regionlocation.australiacentral,
            "crrregions": []
        },
        {
            "shortname": "australiasoutheast",
            "longname": "Australia Southeast",
            "location": regionlocation.australiasoutheast,
            "crrregions": ["australiaeast"]
        },
        {
            "shortname": "brazilsouth",
            "longname": "Brazil South",
            "location": regionlocation.brazilsouth
        },
        {
            "shortname": "canadacentral",
            "longname": "Canada Central",
            "location": regionlocation.canadacentral,
            "crrregions": ["canadaeast"]
        },
        {
            "shortname": "canadaeast",
            "longname": "Canada East",
            "location": regionlocation.canadaeast,
            "crrregions": ["canadacentral"]
        },
        {
            "shortname": "centralindia",
            "longname": "Central India",
            "location": regionlocation.centralindia,
            "crrregions": ["southindia"]
        },
        {
            "shortname": "centralus",
            "longname": "Central US",
            "location": regionlocation.centralus,
            "crrregions": ["southcentralus","eastus2"]
        },
        {
            "shortname": "eastasia",
            "longname": "East Asia",
            "location": regionlocation.eastasia,
            "crrregions": []
        },
        {
            "shortname": "eastus",
            "longname": "East US",
            "location": regionlocation.eastus,
            "crrregions": ["westus","westus2","southcentralus","eastus2"]
        },
        {
            "shortname": "eastus2",
            "longname": "East US 2",
            "location": regionlocation.eastus2,
            "crrregions": ["southcentralus","centralus","eastus","westus2"]
        },
        {
            "shortname": "francecentral",
            "longname": "France Central",
            "location": regionlocation.francecentral,
            "crrregions": ["germanywestcentral"]
        },
        {
            "shortname": "germanywestcentral",
            "longname": "Germany West Central",
            "location": regionlocation.germanywestcentral,
            "crrregions": ["uksouth","germanynorth","westeurope","francecentral"]
        },
        {
            "shortname": "germanynorth",
            "longname": "Germany North",
            "location": regionlocation.germanynorth,
            "crrregions": ["germanywestcentral"]
        },
        {
            "shortname": "japaneast",
            "longname": "Japan East",
            "location": regionlocation.japaneast,
            "crrregions": ["japanwest"]
        },
        {
            "shortname": "japanwest",
            "longname": "Japan West",
            "location": regionlocation.japanwest,
            "crrregions": ["japaneast"]
        },
        {
            "shortname": "koreacentral",
            "longname": "Korea Central",
            "location": regionlocation.koreacentral
        },
        {
            "shortname": "northcentralus",
            "longname": "North Central US",
            "location": regionlocation.northcentralus,
            "crrregions": ["southcentralus"]
        },
        {
            "shortname": "northeurope",
            "longname": "North Europe",
            "location": regionlocation.northeurope,
            "crrregions": ["westeurope"]
        },
        {
            "shortname": "norwayeast",
            "longname": "Norway East",
            "location": regionlocation.norwayeast,
            "crrregions": ["norwaywest"]
        },
        {
            "shortname": "norwaywest",
            "longname": "Norway West",
            "location": regionlocation.norwaywest,
            "crrregions": ["norwayeast"]
        },
        {
            "shortname": "southcentralus",
            "longname": "South Central US",
            "location": regionlocation.southcentralus,
            "crrregions": ["centralus","eastus","eastus2","northcentralus"]
        },
        {
            "shortname": "southindia",
            "longname": "South India",
            "location": regionlocation.southindia,
            "crrregions": ["centralindia"]
        },
        {
            "shortname": "southeastasia",
            "longname": "Southeast Asia",
            "location": regionlocation.southeastasia,
            "crrregions": ["australiaeast"]
        },
        {
            "shortname": "switzerlandnorth",
            "longname": "Switzerland North",
            "location": regionlocation.switzerlandnorth,
            "crrregions": []
        },
        {
            "shortname": "switzerlandwest",
            "longname": "Switzerland West",
            "location": regionlocation.switzerlandwest,
            "crrregions": []
        },
        {
            "shortname": "uaecentral",
            "longname": "UAE Central",
            "location": regionlocation.uaecentral,
            "crrregions": ["uaenorth"]
        },
        {
            "shortname": "uaenorth",
            "longname": "UAE North",
            "location": regionlocation.uaenorth,
            "crrregions": ["uaecentral"]
        },
        {
            "shortname": "uksouth",
            "longname": "UK South",
            "location": regionlocation.uksouth,
            "crrregions": ["ukwest","germanywestcentral"]
        },
        {
            "shortname": "ukwest",
            "longname": "UK West",
            "location": regionlocation.ukwest,
            "crrregions": ["uksouth"]
        },
        {
            "shortname": "usgovarizona",
            "longname": "US Gov Arizona",
            "location": regionlocation.usgovarizona
        },
        {
            "shortname": "usgovvirginia",
            "longname": "US Gov Virginia",
            "location": regionlocation.usgovvirginia,
            "crrregions": ["usgovtexas"]
        },
        {
            "shortname": "usgovtexas",
            "longname": "US Gov Texas",
            "location": regionlocation.usgovtexas,
            "crrregions": ["usgovvirginia"]
        },
        {
            "shortname": "westeurope",
            "longname": "West Europe",
            "location": regionlocation.westeurope,
            "crrregions": ["northeurope","germanywestcentral"]
        },
        {
            "shortname": "westus",
            "longname": "West US",
            "location": regionlocation.westus,
            "crrregions": ["eastus"]
        },
        {
            "shortname": "westus2",
            "longname": "West US 2",
            "location": regionlocation.westus2,
            "crrregions": ["eastus","eastus2"]
        }
    ];

    regionlist.forEach(createhtmlmarker);

    function createhtmlmarker(item, index) {
        var longname = regionlist[index].longname;
        var location = regionlist[index].location;
        var targetregions = regionlist[index].crrregions;
        window[regionlist[index].shortname] = new atlas.HtmlMarker({
            color: 'DodgerBlue',
            text: '10',
            position: location,
            htmlContent: "<div style='width:3em;'><img style='width:3em;' src='https://anftechteam.github.io/calc/anficon.png'></div>",
            popup: new atlas.Popup({
                content: '<div style="padding:10px;color:white"><strong>ANF Region: ' + longname + '</strong> (' + regionlist[index].shortname + ')<br>CRR Targets: ' + targetregions + '<br>Coordinates: ' + location + '<br>Source: <a style="color:LightBlue" href="https://azure.microsoft.com/en-us/global-infrastructure/services/?products=netapp&regions=all">Microsoft</a></div>',
                pixelOffset: [0, -50],
                fillColor: 'rgba(0,0,0,0.6)'
            })
        });
        map.markers.add(window[regionlist[index].shortname]);
        //Add a click event to toggle the popup.
        map.events.add('click',window[regionlist[index].shortname], () => {
            window[regionlist[index].shortname].togglePopup();
            if (targetregions) {
                targetregions.forEach(targetregion => {
                    linename = regionlist[index].shortname + '_' + targetregion;
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
                    window[linename].add(new atlas.data.LineString([location, targetlatlong]));
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
    }
    });
}
