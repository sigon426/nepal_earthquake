// https://github.com/dougmccune/shp2stl
// Utility for converting a shapefile to a 3D model.

var fs = require('fs');
var shp2stl = require('shp2stl');

var file = '../../vm/shape/intensitypol.shp';

shp2stl.shp2stl(file, 

	{
		width: 100, //in STL arbitrary units, but typically 3D printers use mm
		height: 50,//the height in STL units to make the model. This will be the height of the highest poly i
		extraBaseHeight: 0.1,
		extrudeBy: "value",//Either the name of the property in the shapefile to use for the z-axis extrusion
		simplification: 0,// Value should be between 0-1, where 0 will mean no simplification, .8 would attempt to reduce the number of points to 80% of the total

		binary: true,
		cutoutHoles: false,
		verbose: true,
		extrusionMode: 'straight'// Can be set to 'straight' or'smooth'. If set to 'straight' it will generate perfectly flat horizontal planes that are connected together with perpendicular vertical planes for the sides. If set to 'smooth' there will be no explicit vertical side planes generated, but the horizontal planes will have their edges merged with the adjoining plane. Defaults to 'straight'. 
	},

	function(err, stl) {
		fs.writeFileSync('mi_us2000292y.stl',  stl);
	}

);