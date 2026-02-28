ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32613").setExtent([338369.587160, 3486731.606105, 389122.121107, 3518812.639269]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Poblacinde18a24_1 = new ol.format.GeoJSON();
var features_Poblacinde18a24_1 = format_Poblacinde18a24_1.readFeatures(json_Poblacinde18a24_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32613'});
var jsonSource_Poblacinde18a24_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Poblacinde18a24_1.addFeatures(features_Poblacinde18a24_1);
var lyr_Poblacinde18a24_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Poblacinde18a24_1, 
                style: style_Poblacinde18a24_1,
                popuplayertitle: 'Población de 18 a 24',
                interactive: true,
    title: 'Población de 18 a 24<br />\
    <img src="styles/legend/Poblacinde18a24_1_0.png" /> 0 - 195<br />\
    <img src="styles/legend/Poblacinde18a24_1_1.png" /> 195 - 433<br />\
    <img src="styles/legend/Poblacinde18a24_1_2.png" /> 433 - 741<br />\
    <img src="styles/legend/Poblacinde18a24_1_3.png" /> 741 - 1285<br />\
    <img src="styles/legend/Poblacinde18a24_1_4.png" /> 1285 - 3281<br />' });
var format_VialP_2 = new ol.format.GeoJSON();
var features_VialP_2 = format_VialP_2.readFeatures(json_VialP_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32613'});
var jsonSource_VialP_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VialP_2.addFeatures(features_VialP_2);
var lyr_VialP_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VialP_2, 
                style: style_VialP_2,
                popuplayertitle: 'VialP',
                interactive: true,
                title: '<img src="styles/legend/VialP_2.png" /> VialP'
            });
var format_Causadeaccidentestrnsito_3 = new ol.format.GeoJSON();
var features_Causadeaccidentestrnsito_3 = format_Causadeaccidentestrnsito_3.readFeatures(json_Causadeaccidentestrnsito_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32613'});
var jsonSource_Causadeaccidentestrnsito_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Causadeaccidentestrnsito_3.addFeatures(features_Causadeaccidentestrnsito_3);
var lyr_Causadeaccidentestrnsito_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Causadeaccidentestrnsito_3, 
                style: style_Causadeaccidentestrnsito_3,
                popuplayertitle: 'Causa de accidentes tránsito',
                interactive: true,
    title: 'Causa de accidentes tránsito<br />\
    <img src="styles/legend/Causadeaccidentestrnsito_3_0.png" /> EBRIEDAD PRIMER GRADO<br />\
    <img src="styles/legend/Causadeaccidentestrnsito_3_1.png" /> EBRIEDAD SEGUNDO GRADO<br />\
    <img src="styles/legend/Causadeaccidentestrnsito_3_2.png" /> EBRIEDAD TERCER GRADO<br />\
    <img src="styles/legend/Causadeaccidentestrnsito_3_3.png" /> IMPERICIA<br />\
    <img src="styles/legend/Causadeaccidentestrnsito_3_4.png" /> IMPRUDENCIA<br />\
    <img src="styles/legend/Causadeaccidentestrnsito_3_5.png" /> IMPRUDENCIA DEL PEATON<br />\
    <img src="styles/legend/Causadeaccidentestrnsito_3_6.png" /> OTROS<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_Poblacinde18a24_1.setVisible(true);lyr_VialP_2.setVisible(true);lyr_Causadeaccidentestrnsito_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Poblacinde18a24_1,lyr_VialP_2,lyr_Causadeaccidentestrnsito_3];
lyr_Poblacinde18a24_1.set('fieldAliases', {'CVEGEO': 'Clave geografica', 'AGEB': 'AGEB', 'POBTOT': 'Población total', 'P_18A24': 'Población de 18 a 24 años', });
lyr_VialP_2.set('fieldAliases', {'fid': 'fid', 'TERM_GEN': 'Tipo', 'NOM_GEO': 'Nombre', });
lyr_Causadeaccidentestrnsito_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'X': 'X', 'Y': 'Y', 'UBICACION': 'UBICACION', 'FECHA': 'FECHA', 'ZONA': 'ZONA', 'TURNO': 'TURNO', 'HORA': 'HORA', 'MES': 'MES', 'CAUSA_FUND': 'Causa del accidente', 'ZER_GDO': 'ZER_GDO', 'ZDO_GDO': 'ZDO_GDO', 'ZER_GDO_1': 'ZER_GDO_1', 'OTRO': 'OTRO', 'TIPO_DE_AC': 'Tipo de accidente', 'COLONIA': 'COLONIA', 'CALLE_PRIM': 'CALLE_PRIM', 'CALLE_SEGU': 'CALLE_SEGU', 'CLIMA': 'CLIMA', 'LUMINOSIDA': 'LUMINOSIDA', 'tipo_1': 'tipo_1', });
lyr_Poblacinde18a24_1.set('fieldImages', {'CVEGEO': 'TextEdit', 'AGEB': 'TextEdit', 'POBTOT': 'TextEdit', 'P_18A24': 'TextEdit', });
lyr_VialP_2.set('fieldImages', {'fid': 'TextEdit', 'TERM_GEN': 'TextEdit', 'NOM_GEO': 'TextEdit', });
lyr_Causadeaccidentestrnsito_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'UBICACION': 'TextEdit', 'FECHA': 'DateTime', 'ZONA': 'TextEdit', 'TURNO': 'TextEdit', 'HORA': 'DateTime', 'MES': 'Range', 'CAUSA_FUND': 'TextEdit', 'ZER_GDO': 'Range', 'ZDO_GDO': 'Range', 'ZER_GDO_1': 'Range', 'OTRO': 'Range', 'TIPO_DE_AC': 'TextEdit', 'COLONIA': 'TextEdit', 'CALLE_PRIM': 'TextEdit', 'CALLE_SEGU': 'TextEdit', 'CLIMA': 'TextEdit', 'LUMINOSIDA': 'TextEdit', 'tipo_1': 'TextEdit', });
lyr_Poblacinde18a24_1.set('fieldLabels', {'CVEGEO': 'header label - visible with data', 'AGEB': 'header label - visible with data', 'POBTOT': 'header label - visible with data', 'P_18A24': 'header label - visible with data', });
lyr_VialP_2.set('fieldLabels', {'fid': 'no label', 'TERM_GEN': 'no label', 'NOM_GEO': 'header label - visible with data', });
lyr_Causadeaccidentestrnsito_3.set('fieldLabels', {'OBJECTID': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', 'UBICACION': 'hidden field', 'FECHA': 'hidden field', 'ZONA': 'hidden field', 'TURNO': 'hidden field', 'HORA': 'hidden field', 'MES': 'hidden field', 'CAUSA_FUND': 'header label - visible with data', 'ZER_GDO': 'hidden field', 'ZDO_GDO': 'hidden field', 'ZER_GDO_1': 'hidden field', 'OTRO': 'hidden field', 'TIPO_DE_AC': 'header label - visible with data', 'COLONIA': 'hidden field', 'CALLE_PRIM': 'hidden field', 'CALLE_SEGU': 'hidden field', 'CLIMA': 'hidden field', 'LUMINOSIDA': 'hidden field', 'tipo_1': 'hidden field', });
lyr_Causadeaccidentestrnsito_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});