var size = 0;

var styleCache_zonas={}
var style_zonas = function(feature, resolution){
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2}),
    })];
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_zonas[key]){
        var text = new ol.style.Text({
              font: '10.725px Calibri,sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: "rgba(0, 0, 0, 255)"
              }),
            });
        styleCache_zonas[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_zonas[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};