// define the size of the pie (the pize)
var width = 600;
var height = 500;
var radius = 200;

// create a color palette automatically
var color = d3.scale.category20();
var pie = d3.layout.pie();

// define the SHAPE of the pie pieces
// d3.arc = shape
var arc = d3.svg.arc()
	.outerRadius(radius)
	.innerRadius(radius/2);