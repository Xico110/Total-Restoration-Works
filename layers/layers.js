var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_CarraigshoukCoir46_1 = new ol.format.GeoJSON();
var features_CarraigshoukCoir46_1 = format_CarraigshoukCoir46_1.readFeatures(json_CarraigshoukCoir46_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CarraigshoukCoir46_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CarraigshoukCoir46_1.addFeatures(features_CarraigshoukCoir46_1);
var lyr_CarraigshoukCoir46_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CarraigshoukCoir46_1, 
                style: style_CarraigshoukCoir46_1,
                popuplayertitle: "Carraigshouk Coir (46)",
                interactive: true,
                title: '<img src="styles/legend/CarraigshoukCoir46_1.png" /> Carraigshouk Coir (46)'
            });
var format_CarraigshoukTimberDams44_2 = new ol.format.GeoJSON();
var features_CarraigshoukTimberDams44_2 = format_CarraigshoukTimberDams44_2.readFeatures(json_CarraigshoukTimberDams44_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CarraigshoukTimberDams44_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CarraigshoukTimberDams44_2.addFeatures(features_CarraigshoukTimberDams44_2);
var lyr_CarraigshoukTimberDams44_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CarraigshoukTimberDams44_2, 
                style: style_CarraigshoukTimberDams44_2,
                popuplayertitle: "Carraigshouk Timber Dams (44)",
                interactive: true,
                title: '<img src="styles/legend/CarraigshoukTimberDams44_2.png" /> Carraigshouk Timber Dams (44)'
            });
var format_CarrigeenduffSheepFleece31_3 = new ol.format.GeoJSON();
var features_CarrigeenduffSheepFleece31_3 = format_CarrigeenduffSheepFleece31_3.readFeatures(json_CarrigeenduffSheepFleece31_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CarrigeenduffSheepFleece31_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CarrigeenduffSheepFleece31_3.addFeatures(features_CarrigeenduffSheepFleece31_3);
var lyr_CarrigeenduffSheepFleece31_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CarrigeenduffSheepFleece31_3, 
                style: style_CarrigeenduffSheepFleece31_3,
                popuplayertitle: "Carrigeenduff Sheep Fleece (31)",
                interactive: true,
                title: '<img src="styles/legend/CarrigeenduffSheepFleece31_3.png" /> Carrigeenduff Sheep Fleece (31)'
            });
var format_CarrigeenduffSheepFleecePiles4_4 = new ol.format.GeoJSON();
var features_CarrigeenduffSheepFleecePiles4_4 = format_CarrigeenduffSheepFleecePiles4_4.readFeatures(json_CarrigeenduffSheepFleecePiles4_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CarrigeenduffSheepFleecePiles4_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CarrigeenduffSheepFleecePiles4_4.addFeatures(features_CarrigeenduffSheepFleecePiles4_4);
var lyr_CarrigeenduffSheepFleecePiles4_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CarrigeenduffSheepFleecePiles4_4, 
                style: style_CarrigeenduffSheepFleecePiles4_4,
                popuplayertitle: "Carrigeenduff Sheep Fleece Piles (4)",
                interactive: true,
                title: '<img src="styles/legend/CarrigeenduffSheepFleecePiles4_4.png" /> Carrigeenduff Sheep Fleece Piles (4)'
            });
var format_TulachnTimberDams55_5 = new ol.format.GeoJSON();
var features_TulachnTimberDams55_5 = format_TulachnTimberDams55_5.readFeatures(json_TulachnTimberDams55_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TulachnTimberDams55_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TulachnTimberDams55_5.addFeatures(features_TulachnTimberDams55_5);
var lyr_TulachnTimberDams55_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TulachnTimberDams55_5, 
                style: style_TulachnTimberDams55_5,
                popuplayertitle: "Tulachán Timber Dams (55)",
                interactive: true,
                title: '<img src="styles/legend/TulachnTimberDams55_5.png" /> Tulachán Timber Dams (55)'
            });
var format_TulachnStoneDams38_6 = new ol.format.GeoJSON();
var features_TulachnStoneDams38_6 = format_TulachnStoneDams38_6.readFeatures(json_TulachnStoneDams38_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TulachnStoneDams38_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TulachnStoneDams38_6.addFeatures(features_TulachnStoneDams38_6);
var lyr_TulachnStoneDams38_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TulachnStoneDams38_6, 
                style: style_TulachnStoneDams38_6,
                popuplayertitle: "Tulachán Stone Dams (38)",
                interactive: true,
                title: '<img src="styles/legend/TulachnStoneDams38_6.png" /> Tulachán Stone Dams (38)'
            });
var format_TulachnSheepFleece9_7 = new ol.format.GeoJSON();
var features_TulachnSheepFleece9_7 = format_TulachnSheepFleece9_7.readFeatures(json_TulachnSheepFleece9_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TulachnSheepFleece9_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TulachnSheepFleece9_7.addFeatures(features_TulachnSheepFleece9_7);
var lyr_TulachnSheepFleece9_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TulachnSheepFleece9_7, 
                style: style_TulachnSheepFleece9_7,
                popuplayertitle: "Tulachán Sheep Fleece (9)",
                interactive: true,
                title: '<img src="styles/legend/TulachnSheepFleece9_7.png" /> Tulachán Sheep Fleece (9)'
            });
var format_TulachnCoir198_8 = new ol.format.GeoJSON();
var features_TulachnCoir198_8 = format_TulachnCoir198_8.readFeatures(json_TulachnCoir198_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TulachnCoir198_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TulachnCoir198_8.addFeatures(features_TulachnCoir198_8);
var lyr_TulachnCoir198_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TulachnCoir198_8, 
                style: style_TulachnCoir198_8,
                popuplayertitle: "Tulachán Coir (198)",
                interactive: true,
                title: '<img src="styles/legend/TulachnCoir198_8.png" /> Tulachán Coir (198)'
            });
var format_GranamoreStoneDams28_9 = new ol.format.GeoJSON();
var features_GranamoreStoneDams28_9 = format_GranamoreStoneDams28_9.readFeatures(json_GranamoreStoneDams28_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GranamoreStoneDams28_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranamoreStoneDams28_9.addFeatures(features_GranamoreStoneDams28_9);
var lyr_GranamoreStoneDams28_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranamoreStoneDams28_9, 
                style: style_GranamoreStoneDams28_9,
                popuplayertitle: "Granamore Stone Dams (28)",
                interactive: true,
                title: '<img src="styles/legend/GranamoreStoneDams28_9.png" /> Granamore Stone Dams (28)'
            });
var format_GranamoreTimberDams510_10 = new ol.format.GeoJSON();
var features_GranamoreTimberDams510_10 = format_GranamoreTimberDams510_10.readFeatures(json_GranamoreTimberDams510_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GranamoreTimberDams510_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranamoreTimberDams510_10.addFeatures(features_GranamoreTimberDams510_10);
var lyr_GranamoreTimberDams510_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranamoreTimberDams510_10, 
                style: style_GranamoreTimberDams510_10,
                popuplayertitle: "Granamore Timber Dams (510)",
                interactive: true,
                title: '<img src="styles/legend/GranamoreTimberDams510_10.png" /> Granamore Timber Dams (510)'
            });
var format_BarnacullianTimberDams489_11 = new ol.format.GeoJSON();
var features_BarnacullianTimberDams489_11 = format_BarnacullianTimberDams489_11.readFeatures(json_BarnacullianTimberDams489_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BarnacullianTimberDams489_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BarnacullianTimberDams489_11.addFeatures(features_BarnacullianTimberDams489_11);
var lyr_BarnacullianTimberDams489_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BarnacullianTimberDams489_11, 
                style: style_BarnacullianTimberDams489_11,
                popuplayertitle: "Barnacullian Timber Dams (489)",
                interactive: true,
                title: '<img src="styles/legend/BarnacullianTimberDams489_11.png" /> Barnacullian Timber Dams (489)'
            });
var format_BarnacullianStoneDams135_12 = new ol.format.GeoJSON();
var features_BarnacullianStoneDams135_12 = format_BarnacullianStoneDams135_12.readFeatures(json_BarnacullianStoneDams135_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BarnacullianStoneDams135_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BarnacullianStoneDams135_12.addFeatures(features_BarnacullianStoneDams135_12);
var lyr_BarnacullianStoneDams135_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BarnacullianStoneDams135_12, 
                style: style_BarnacullianStoneDams135_12,
                popuplayertitle: "Barnacullian Stone Dams (135)",
                interactive: true,
                title: '<img src="styles/legend/BarnacullianStoneDams135_12.png" /> Barnacullian Stone Dams (135)'
            });
var format_BarnacullianSheepFleece9_13 = new ol.format.GeoJSON();
var features_BarnacullianSheepFleece9_13 = format_BarnacullianSheepFleece9_13.readFeatures(json_BarnacullianSheepFleece9_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BarnacullianSheepFleece9_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BarnacullianSheepFleece9_13.addFeatures(features_BarnacullianSheepFleece9_13);
var lyr_BarnacullianSheepFleece9_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BarnacullianSheepFleece9_13, 
                style: style_BarnacullianSheepFleece9_13,
                popuplayertitle: "Barnacullian Sheep Fleece (9)",
                interactive: true,
                title: '<img src="styles/legend/BarnacullianSheepFleece9_13.png" /> Barnacullian Sheep Fleece (9)'
            });
var format_BarnacullianCoir338_14 = new ol.format.GeoJSON();
var features_BarnacullianCoir338_14 = format_BarnacullianCoir338_14.readFeatures(json_BarnacullianCoir338_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BarnacullianCoir338_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BarnacullianCoir338_14.addFeatures(features_BarnacullianCoir338_14);
var lyr_BarnacullianCoir338_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BarnacullianCoir338_14, 
                style: style_BarnacullianCoir338_14,
                popuplayertitle: "Barnacullian Coir (338)",
                interactive: true,
                title: '<img src="styles/legend/BarnacullianCoir338_14.png" /> Barnacullian Coir (338)'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_CarraigshoukCoir46_1.setVisible(true);lyr_CarraigshoukTimberDams44_2.setVisible(true);lyr_CarrigeenduffSheepFleece31_3.setVisible(true);lyr_CarrigeenduffSheepFleecePiles4_4.setVisible(true);lyr_TulachnTimberDams55_5.setVisible(true);lyr_TulachnStoneDams38_6.setVisible(true);lyr_TulachnSheepFleece9_7.setVisible(true);lyr_TulachnCoir198_8.setVisible(true);lyr_GranamoreStoneDams28_9.setVisible(true);lyr_GranamoreTimberDams510_10.setVisible(true);lyr_BarnacullianTimberDams489_11.setVisible(true);lyr_BarnacullianStoneDams135_12.setVisible(true);lyr_BarnacullianSheepFleece9_13.setVisible(true);lyr_BarnacullianCoir338_14.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_CarraigshoukCoir46_1,lyr_CarraigshoukTimberDams44_2,lyr_CarrigeenduffSheepFleece31_3,lyr_CarrigeenduffSheepFleecePiles4_4,lyr_TulachnTimberDams55_5,lyr_TulachnStoneDams38_6,lyr_TulachnSheepFleece9_7,lyr_TulachnCoir198_8,lyr_GranamoreStoneDams28_9,lyr_GranamoreTimberDams510_10,lyr_BarnacullianTimberDams489_11,lyr_BarnacullianStoneDams135_12,lyr_BarnacullianSheepFleece9_13,lyr_BarnacullianCoir338_14];
lyr_CarraigshoukCoir46_1.set('fieldAliases', {'Name': 'Name', 'X': 'X', 'Y': 'Y', });
lyr_CarraigshoukTimberDams44_2.set('fieldAliases', {'Name': 'Name', 'X': 'X', 'Y': 'Y', });
lyr_CarrigeenduffSheepFleece31_3.set('fieldAliases', {'Name': 'Name', 'X': 'X', 'Y': 'Y', });
lyr_CarrigeenduffSheepFleecePiles4_4.set('fieldAliases', {'Name': 'Name', 'X': 'X', 'Y': 'Y', });
lyr_TulachnTimberDams55_5.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'name': 'name', });
lyr_TulachnStoneDams38_6.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'name': 'name', });
lyr_TulachnSheepFleece9_7.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'name': 'name', });
lyr_TulachnCoir198_8.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'name': 'name', });
lyr_GranamoreStoneDams28_9.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'name': 'name', 'description': 'description', });
lyr_GranamoreTimberDams510_10.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'Name': 'Name', 'description': 'description', 'Date of Construction': 'Date of Construction', });
lyr_BarnacullianTimberDams489_11.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'Name': 'Name', });
lyr_BarnacullianStoneDams135_12.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'Name': 'Name', });
lyr_BarnacullianSheepFleece9_13.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'Name': 'Name', });
lyr_BarnacullianCoir338_14.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'Name': 'Name', });
lyr_CarraigshoukCoir46_1.set('fieldImages', {'Name': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_CarraigshoukTimberDams44_2.set('fieldImages', {'Name': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_CarrigeenduffSheepFleece31_3.set('fieldImages', {'Name': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_CarrigeenduffSheepFleecePiles4_4.set('fieldImages', {'Name': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_TulachnTimberDams55_5.set('fieldImages', {'X': 'TextEdit', 'Y': 'TextEdit', 'name': 'TextEdit', });
lyr_TulachnStoneDams38_6.set('fieldImages', {'X': 'TextEdit', 'Y': 'TextEdit', 'name': 'TextEdit', });
lyr_TulachnSheepFleece9_7.set('fieldImages', {'X': 'TextEdit', 'Y': 'TextEdit', 'name': 'TextEdit', });
lyr_TulachnCoir198_8.set('fieldImages', {'X': 'TextEdit', 'Y': 'TextEdit', 'name': 'TextEdit', });
lyr_GranamoreStoneDams28_9.set('fieldImages', {'X': 'TextEdit', 'Y': 'TextEdit', 'name': 'TextEdit', 'description': 'TextEdit', });
lyr_GranamoreTimberDams510_10.set('fieldImages', {'X': 'TextEdit', 'Y': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'Date of Construction': 'TextEdit', });
lyr_BarnacullianTimberDams489_11.set('fieldImages', {'X': 'TextEdit', 'Y': 'TextEdit', 'Name': 'TextEdit', });
lyr_BarnacullianStoneDams135_12.set('fieldImages', {'X': 'TextEdit', 'Y': 'TextEdit', 'Name': 'TextEdit', });
lyr_BarnacullianSheepFleece9_13.set('fieldImages', {'X': 'TextEdit', 'Y': 'TextEdit', 'Name': 'TextEdit', });
lyr_BarnacullianCoir338_14.set('fieldImages', {'X': 'TextEdit', 'Y': 'TextEdit', 'Name': 'TextEdit', });
lyr_CarraigshoukCoir46_1.set('fieldLabels', {'Name': 'inline label - visible with data', 'X': 'hidden field', 'Y': 'hidden field', });
lyr_CarraigshoukTimberDams44_2.set('fieldLabels', {'Name': 'inline label - visible with data', 'X': 'hidden field', 'Y': 'hidden field', });
lyr_CarrigeenduffSheepFleece31_3.set('fieldLabels', {'Name': 'inline label - visible with data', 'X': 'hidden field', 'Y': 'hidden field', });
lyr_CarrigeenduffSheepFleecePiles4_4.set('fieldLabels', {'Name': 'inline label - visible with data', 'X': 'hidden field', 'Y': 'hidden field', });
lyr_TulachnTimberDams55_5.set('fieldLabels', {'X': 'hidden field', 'Y': 'hidden field', 'name': 'inline label - visible with data', });
lyr_TulachnStoneDams38_6.set('fieldLabels', {'X': 'hidden field', 'Y': 'hidden field', 'name': 'inline label - visible with data', });
lyr_TulachnSheepFleece9_7.set('fieldLabels', {'X': 'hidden field', 'Y': 'hidden field', 'name': 'inline label - visible with data', });
lyr_TulachnCoir198_8.set('fieldLabels', {'X': 'hidden field', 'Y': 'hidden field', 'name': 'inline label - visible with data', });
lyr_GranamoreStoneDams28_9.set('fieldLabels', {'X': 'hidden field', 'Y': 'hidden field', 'name': 'inline label - visible with data', 'description': 'hidden field', });
lyr_GranamoreTimberDams510_10.set('fieldLabels', {'X': 'hidden field', 'Y': 'hidden field', 'Name': 'inline label - visible with data', 'description': 'hidden field', 'Date of Construction': 'inline label - visible with data', });
lyr_BarnacullianTimberDams489_11.set('fieldLabels', {'X': 'hidden field', 'Y': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_BarnacullianStoneDams135_12.set('fieldLabels', {'X': 'hidden field', 'Y': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_BarnacullianSheepFleece9_13.set('fieldLabels', {'X': 'hidden field', 'Y': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_BarnacullianCoir338_14.set('fieldLabels', {'X': 'hidden field', 'Y': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_BarnacullianCoir338_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});