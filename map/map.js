function GetMap(){

    //Initialize a map instance.
    var map = new atlas.Map('map', {
        center: [-90, 40],
        zoom: 3, 
        view: "Auto",
        authOptions: {
                    authType: 'subscriptionKey',
                    subscriptionKey: '4x5iREtpb50Qu_EtZyS30B8ld2dZ4GD8eBFxEMcxfe8'
                }
    });
    
    //Wait until the map resources are ready.
    map.events.add('ready', function () {
    
        
        var australiaeast = new atlas.HtmlMarker({
        color: 'DodgerBlue',
        text: '10',
        position: [151.2094, -33.86],
        htmlContent: "<div style='width:3em;'><img style='width:3em;' src='https://anftechteam.github.io/calc/anficon.png'></div>",
        popup: new atlas.Popup({
            content: '<div style="padding:10px">Australia East</div>',
            pixelOffset: [0, -50]
        })
    });
    
    map.markers.add(australiaeast);
    
    //Add a click event to toggle the popup.
    map.events.add('click',australiaeast, () => {
        australiaeast.togglePopup();
    });
    
    var australiasoutheast = new atlas.HtmlMarker({
        color: 'DodgerBlue',
        text: '10',
        position: [144.9631, -37.8136],
        htmlContent: "<div style='width:3em;'><img style='width:3em;' src='https://anftechteam.github.io/calc/anficon.png'></div>",
        popup: new atlas.Popup({
            content: '<div style="padding:10px">Australia Southeast</div>',
            pixelOffset: [0, -50]
        })
    });
    
    var canadacentral = new atlas.HtmlMarker({
        color: 'DodgerBlue',
        text: '10',
        position: [-79.383, 43.653],
        htmlContent: "<div style='width:3em;'><img style='width:3em;' src='https://anftechteam.github.io/calc/anficon.png'></div>",
        popup: new atlas.Popup({
            content: '<div style="padding:10px">Canada Central</div>',
            pixelOffset: [0, -50]
        })
    });
    
    map.markers.add(canadacentral);
    
    //Add a click event to toggle the popup.
    map.events.add('click',canadacentral, () => {
        canadacentral.togglePopup();
    });
    
    map.markers.add(australiasoutheast);
    
    //Add a click event to toggle the popup.
    map.events.add('click',australiasoutheast, () => {
        australiasoutheast.togglePopup();
    });
    
    var canadaeast = new atlas.HtmlMarker({
        color: 'DodgerBlue',
        text: '10',
        position: [-71.217, 46.817],
        htmlContent: "<div style='width:3em;'><img style='width:3em;' src='https://anftechteam.github.io/calc/anficon.png'></div>",
        popup: new atlas.Popup({
            content: '<div style="padding:10px">Canada East</div>',
            pixelOffset: [0, -50]
        })
    });
    
    map.markers.add(canadaeast);
    
    //Add a click event to toggle the popup.
    map.events.add('click',canadaeast, () => {
        canadaeast.togglePopup();
    });
    
    var centralindia = new atlas.HtmlMarker({
        color: 'DodgerBlue',
        text: '10',
        position: [73.9197, 18.5822],
        htmlContent: "<div style='width:3em;'><img style='width:3em;' src='https://anftechteam.github.io/calc/anficon.png'></div>",
        popup: new atlas.Popup({
            content: '<div style="padding:10px">Central India</div>',
            pixelOffset: [0, -50]
        })
    });
    
    map.markers.add(centralindia);
    
    //Add a click event to toggle the popup.
    map.events.add('click',centralindia, () => {
        centralindia.togglePopup();
    });
    
    var centralus = new atlas.HtmlMarker({
        color: 'DodgerBlue',
        text: '10',
        position: [-93.6208, 41.5908],
        htmlContent: "<div style='width:3em;'><img style='width:3em;' src='https://anftechteam.github.io/calc/anficon.png'></div>",
        popup: new atlas.Popup({
            content: '<div style="padding:10px">Central US</div>',
            pixelOffset: [0, -50]
        })
    });
    
    map.markers.add(centralus);
    
    //Add a click event to toggle the popup.
    map.events.add('click',centralus, () => {
        centralus.togglePopup();
    });
    
    var eastus = new atlas.HtmlMarker({
        color: 'DodgerBlue',
        text: '10',
        position: [-79.8164, 37.3719],
        htmlContent: "<div style='width:3em;'><img style='width:3em;' src='https://anftechteam.github.io/calc/anficon.png'></div>",
        popup: new atlas.Popup({
            content: '<div style="padding:10px">East US</div>',
            pixelOffset: [0, -50]
        })
    });
    
    map.markers.add(eastus);
    
    //Add a click event to toggle the popup.
    map.events.add('click',eastus, () => {
        eastus.togglePopup();
    });
    
    
    var eastus2 = new atlas.HtmlMarker({
            color: 'DodgerBlue',
            text: '10',
            position: [-78.3889, 36.6681],
            htmlContent: "<div style='width:3em;'><img style='width:3em;' src='https://anftechteam.github.io/calc/anficon.png'></div>",
            popup: new atlas.Popup({
                content: '<div style="padding:10px">East US 2</div>',
                pixelOffset: [0, -50]
            })
        });
    
        map.markers.add(eastus2);
    
        //Add a click event to toggle the popup.
        map.events.add('click',eastus2, () => {
            eastus2.togglePopup();
        });
    
        var germanywestcentral = new atlas.HtmlMarker({
        color: 'DodgerBlue',
        text: '10',
        position: [8.682127, 50.110924],
        htmlContent: "<div style='width:3em;'><img style='width:3em;' src='https://anftechteam.github.io/calc/anficon.png'></div>",
        popup: new atlas.Popup({
            content: '<div style="padding:10px">Germany West Central</div>',
            pixelOffset: [0, -50]
        })
    });
    
    map.markers.add(germanywestcentral);
    
    //Add a click event to toggle the popup.
    map.events.add('click',germanywestcentral, () => {
        germanywestcentral.togglePopup();
    });
    var japaneast = new atlas.HtmlMarker({
        color: 'DodgerBlue',
        text: '10',
        position: [139.77, 35.68],
        htmlContent: "<div style='width:3em;'><img style='width:3em;' src='https://anftechteam.github.io/calc/anficon.png'></div>",
        popup: new atlas.Popup({
            content: '<div style="padding:10px">Japan East</div>',
            pixelOffset: [0, -50]
        })
    });
    
    map.markers.add(japaneast);
    
    //Add a click event to toggle the popup.
    map.events.add('click',japaneast, () => {
        japaneast.togglePopup();
    });
    
    var japanwest = new atlas.HtmlMarker({
        color: 'DodgerBlue',
        text: '10',
        position: [135.5022, 34.6939],
        htmlContent: "<div style='width:3em;'><img style='width:3em;' src='https://anftechteam.github.io/calc/anficon.png'></div>",
        popup: new atlas.Popup({
            content: '<div style="padding:10px">Japan West</div>',
            pixelOffset: [0, -50]
        })
    });
    
    map.markers.add(japanwest);
    
    //Add a click event to toggle the popup.
    map.events.add('click',japanwest, () => {
        japanwest.togglePopup();
    });
    
    var northeurope = new atlas.HtmlMarker({
        color: 'DodgerBlue',
        text: '10',
        position: [-6.2597, 53.3478],
        htmlContent: "<div style='width:3em;'><img style='width:3em;' src='https://anftechteam.github.io/calc/anficon.png'></div>",
        popup: new atlas.Popup({
            content: '<div style="padding:10px">North Europe</div>',
            pixelOffset: [0, -50]
        })
    });
    
    map.markers.add(northeurope);
    
    //Add a click event to toggle the popup.
    map.events.add('click',northeurope, () => {
        northeurope.togglePopup();
    });
    
    var southcentralus = new atlas.HtmlMarker({
        color: 'DodgerBlue',
        text: '10',
        position: [-98.5, 29.4167],
        htmlContent: "<div style='width:3em;'><img style='width:3em;' src='https://anftechteam.github.io/calc/anficon.png'></div>",
        popup: new atlas.Popup({
            content: '<div style="padding:10px">South Central US</div>',
            pixelOffset: [0, -50]
        })
    });
    
    map.markers.add(southcentralus);
    
    //Add a click event to toggle the popup.
    map.events.add('click',southcentralus, () => {
        southcentralus.togglePopup();
    });
    
    var southindia = new atlas.HtmlMarker({
        color: 'DodgerBlue',
        text: '10',
        position: [80.1636, 12.9822],
        htmlContent: "<div style='width:3em;'><img style='width:3em;' src='https://anftechteam.github.io/calc/anficon.png'></div>",
        popup: new atlas.Popup({
            content: '<div style="padding:10px">South India</div>',
            pixelOffset: [0, -50]
        })
    });
    
    map.markers.add(southindia);
    
    //Add a click event to toggle the popup.
    map.events.add('click',southindia, () => {
        southindia.togglePopup();
    });
    
    var southeastasia = new atlas.HtmlMarker({
        color: 'DodgerBlue',
        text: '10',
        position: [103.833, 1.283],
        htmlContent: "<div style='width:3em;'><img style='width:3em;' src='https://anftechteam.github.io/calc/anficon.png'></div>",
        popup: new atlas.Popup({
            content: '<div style="padding:10px">Southeast Asia</div>',
            pixelOffset: [0, -50]
        })
    });
    
    map.markers.add(southeastasia);
    
    //Add a click event to toggle the popup.
    map.events.add('click',southeastasia, () => {
        southeastasia.togglePopup();
    });
    
    var uaecentral = new atlas.HtmlMarker({
        color: 'DodgerBlue',
        text: '10',
        position: [54.366669, 24.466667],
        htmlContent: "<div style='width:3em;'><img style='width:3em;' src='https://anftechteam.github.io/calc/anficon.png'></div>",
        popup: new atlas.Popup({
            content: '<div style="padding:10px">UAE Central</div>',
            pixelOffset: [0, -50]
        })
    });
    
    map.markers.add(uaecentral);
    
    //Add a click event to toggle the popup.
    map.events.add('click',uaecentral, () => {
        uaecentral.togglePopup();
    });
    
    var uksouth = new atlas.HtmlMarker({
        color: 'DodgerBlue',
        text: '10',
        position: [-0.799, 50.941],
        htmlContent: "<div style='width:3em;'><img style='width:3em;' src='https://anftechteam.github.io/calc/anficon.png'></div>",
        popup: new atlas.Popup({
            content: '<div style="padding:10px">UK South</div>',
            pixelOffset: [0, -50]
        })
    });
    
    map.markers.add(uksouth);
    
    //Add a click event to toggle the popup.
    map.events.add('click',uksouth, () => {
        uksouth.togglePopup();
    });
    
    var ukwest = new atlas.HtmlMarker({
        color: 'DodgerBlue',
        text: '10',
        position: [-3.084, 53.427],
        htmlContent: "<div style='width:3em;'><img style='width:3em;' src='https://anftechteam.github.io/calc/anficon.png'></div>",
        popup: new atlas.Popup({
            content: '<div style="padding:10px">UK West</div>',
            pixelOffset: [0, -50]
        })
    });
    
    map.markers.add(ukwest);
    
    //Add a click event to toggle the popup.
    map.events.add('click',ukwest, () => {
        ukwest.togglePopup();
    });
    
    
    var westeurope = new atlas.HtmlMarker({
        color: 'DodgerBlue',
        text: '10',
        position: [4.9, 52.3667],
        htmlContent: "<div style='width:3em;'><img style='width:3em;' src='https://anftechteam.github.io/calc/anficon.png'></div>",
        popup: new atlas.Popup({
            content: '<div style="padding:10px">West Europe</div>',
            pixelOffset: [0, -50]
        })
    });
    
    map.markers.add(westeurope);
    
    //Add a click event to toggle the popup.
    map.events.add('click',westeurope, () => {
        westeurope.togglePopup();
    });
    
    var westus = new atlas.HtmlMarker({
        color: 'DodgerBlue',
        text: '10',
        position: [-122.417, 37.783],
        htmlContent: "<div style='width:3em;'><img style='width:3em;' src='https://anftechteam.github.io/calc/anficon.png'></div>",
        popup: new atlas.Popup({
            content: '<div style="padding:10px">West US</div>',
            pixelOffset: [0, -50]
        })
    });
    
    map.markers.add(westus);
    
    //Add a click event to toggle the popup.
    map.events.add('click',westus, () => {
        westus.togglePopup();
    });
    
    var westus2 = new atlas.HtmlMarker({
        color: 'DodgerBlue',
        text: '10',
        position: [-119.852, 47.233],
        htmlContent: "<div style='width:3em;'><img style='width:3em;' src='https://anftechteam.github.io/calc/anficon.png'></div>",
        popup: new atlas.Popup({
            content: '<div style="padding:10px">West US 2</div>',
            pixelOffset: [0, -50]
        })
    });
    
    map.markers.add(westus2);
    
    //Add a click event to toggle the popup.
    map.events.add('click',westus2, () => {
        westus2.togglePopup();
    });
    
    
    
    
    
    
    });
    
    
    
         }