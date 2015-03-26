// define the size of the pie (the pize)
var width = 600;
var height = 500;
var radius = 200;

// var data = [1,2,3,5,8];
var data = d3.range(5).map(d3.random.bates(1));


// create a color palette automatically
var color = d3.scale.category20();

// make a pie constructor
var pie = d3.layout.pie();

// define the SHAPE of the pie pieces
// d3.arc = shape
var arc = d3.svg.arc()
	.outerRadius(radius)
	.innerRadius(radius/2);

// create an svg element
// this could be done with html
var svg = d3.select('html')
	.append('svg')
	.attr('width',width)
	.attr('height',height);

// put a container in the svg, in order to center things
var container = svg.append("g")
	.attr('transform',"translate(" + width / 2 + "," + height / 2 + ")");

// create a stencil by passing the data to our pie constructor
var stencil = pie(data);

// create a "g" tag for every element in the array, store it in the variable g
var g = container.selectAll("g") // create virtual arc pieces that don't exist yet
	.data(stencil)	// bind the non existent arcs to data
	.enter() 			// create a selection 
	.append('g');

// append a path element to each g tag, and make it a colorful arc
g.append("path")
  .attr("d", arc)
  .style("fill", function(d,i){
  	return color(d.value);
  });