var size = 0;

var styleCache_ZoneName2={}
var style_ZoneName2 = function(feature, resolution){
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 0.0 + size,
            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(135,252,143,1.0)"})})
    })];
    if (feature.get("ZoneName") !== null) {
        var labelText = String(feature.get("ZoneName"));
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_ZoneName2[key]){
        var text = new ol.style.Text({
              font: '12.025px Calibri,sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: "rgba(27, 8, 240, 255)"
              }),
            });
        styleCache_ZoneName2[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_ZoneName2[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};