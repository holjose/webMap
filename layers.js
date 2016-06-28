var baseLayer = new ol.layer.Group({
    'title': 'Base maps',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_ExtractedArea = new ol.format.GeoJSON();
var features_ExtractedArea = format_ExtractedArea.readFeatures(geojson_ExtractedArea, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ExtractedArea = new ol.source.Vector();
jsonSource_ExtractedArea.addFeatures(features_ExtractedArea);var lyr_ExtractedArea = new ol.layer.Vector({
                source:jsonSource_ExtractedArea, 
                style: style_ExtractedArea,
                title: "ExtractedArea"
            });var format_zonas = new ol.format.GeoJSON();
var features_zonas = format_zonas.readFeatures(geojson_zonas, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zonas = new ol.source.Vector();
jsonSource_zonas.addFeatures(features_zonas);var lyr_zonas = new ol.layer.Vector({
                source:jsonSource_zonas, 
                style: style_zonas,
                title: "zonas"
            });var format_ZoneName2 = new ol.format.GeoJSON();
var features_ZoneName2 = format_ZoneName2.readFeatures(geojson_ZoneName2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZoneName2 = new ol.source.Vector();
jsonSource_ZoneName2.addFeatures(features_ZoneName2);var lyr_ZoneName2 = new ol.layer.Vector({
                source:jsonSource_ZoneName2, 
                style: style_ZoneName2,
                title: "ZoneName2"
            });var format_CadastrodenovaONGResponsesONGgis = new ol.format.GeoJSON();
var features_CadastrodenovaONGResponsesONGgis = format_CadastrodenovaONGResponsesONGgis.readFeatures(geojson_CadastrodenovaONGResponsesONGgis, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CadastrodenovaONGResponsesONGgis = new ol.source.Vector();
jsonSource_CadastrodenovaONGResponsesONGgis.addFeatures(features_CadastrodenovaONGResponsesONGgis);var lyr_CadastrodenovaONGResponsesONGgis = new ol.layer.Vector({
                source:jsonSource_CadastrodenovaONGResponsesONGgis, 
                style: style_CadastrodenovaONGResponsesONGgis,
                title: "Cadastro de nova ONG (Responses) - ONGgis"
            });

lyr_ExtractedArea.setVisible(true);lyr_zonas.setVisible(true);lyr_ZoneName2.setVisible(true);lyr_CadastrodenovaONGResponsesONGgis.setVisible(true);
var layersList = [baseLayer,lyr_ExtractedArea,lyr_zonas,lyr_ZoneName2,lyr_CadastrodenovaONGResponsesONGgis];
