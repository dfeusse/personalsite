var buttonPositive = d3.select("#display").append("button")
   .classed("pone", true)
   .text("Positive");
    //.datum({count: 1000});
var buttonNegative = d3.select("#display").append("button")
    .classed("pone2", true)
   .text("Negative");
    //.datum({count: 500});
var buttonReset = d3.select("#display").append("button")
    .classed("pone3", true)
    .text("Total");
    
var svg = d3.select("#display").append("svg")
  .attr("width", 820)
  .attr("height", 300);

var data = [ 
    {'date': 'Oct 5', 'tweets': 12304},
    {'date': 'Oct 6', 'tweets': 9242},
    {'date': 'Oct 7', 'tweets': 4684},
    {'date': 'Oct 8', 'tweets': 11808},
    {'date': 'Oct 9', 'tweets': 15726},
    {'date': 'Oct 10', 'tweets': 21380},
    {'date': 'Oct 11', 'tweets': 15095},
    {'date': 'Oct 12', 'tweets': 27302},
    {'date': 'Oct 13', 'tweets': 11893},
    {'date': 'Oct 14', 'tweets': 9289},
    {'date': 'Oct 15', 'tweets': 26630},
    {'date': 'Oct 16', 'tweets': 23796},
    {'date': 'Oct 17', 'tweets': 16015},
    {'date': 'Oct 18', 'tweets': 18377},
    {'date': 'Oct 19', 'tweets': 19600},
    {'date': 'Oct 20', 'tweets': 12349},
    {'date': 'Oct 21', 'tweets': 17350},
    {'date': 'Oct 22', 'tweets': 47256},
    {'date': 'Oct 23', 'tweets': 38099},
    {'date': 'Oct 24', 'tweets': 29495},
    {'date': 'Oct 25', 'tweets': 134877},
    {'date': 'Oct 26', 'tweets': 151604},
    {'date': 'Oct 27', 'tweets': 67959},
    {'date': 'Oct 28', 'tweets': 44004},
    {'date': 'Oct 29', 'tweets': 53237},
    {'date': 'Oct 30', 'tweets': 60473},
    {'date': 'Dec 1', 'tweets': 35663},
    {'date': 'Dec 2', 'tweets': 30615},
    {'date': 'Dec 3', 'tweets': 18634}
];

var pos_data = [
    {'date': 'Oct 5', 'tweets': 1163},
    {'date': 'Oct 6', 'tweets': 3850},
    {'date': 'Oct 7', 'tweets': 685},
    {'date': 'Oct 8', 'tweets': 1295},
    {'date': 'Oct 9', 'tweets': 2227},
    {'date': 'Oct 10', 'tweets': 2581},
    {'date': 'Oct 11', 'tweets': 2192},
    {'date': 'Oct 12', 'tweets': 2162},
    {'date': 'Oct 13', 'tweets': 1173},
    {'date': 'Oct 14', 'tweets': 1454},
    {'date': 'Oct 15', 'tweets': 3512},
    {'date': 'Oct 16', 'tweets': 3189},
    {'date': 'Oct 17', 'tweets': 2258},
    {'date': 'Oct 18', 'tweets': 2780},
    {'date': 'Oct 19', 'tweets': 2462},
    {'date': 'Oct 20', 'tweets': 1631},
    {'date': 'Oct 21', 'tweets': 5644},
    {'date': 'Oct 22', 'tweets': 6743},
    {'date': 'Oct 23', 'tweets': 4724},
    {'date': 'Oct 24', 'tweets': 4395},
    {'date': 'Oct 25', 'tweets': 24129},
    {'date': 'Oct 26', 'tweets': 27531},
    {'date': 'Oct 27', 'tweets': 12946},
    {'date': 'Oct 28', 'tweets': 8053},
    {'date': 'Oct 29', 'tweets': 9194},
    {'date': 'Oct 30', 'tweets': 10855},
    {'date': 'Dec 1', 'tweets': 6619},
    {'date': 'Dec 2', 'tweets': 5529},
    {'date': 'Dec 3', 'tweets': 3548}
];

var neg_data = [
    {'date': 'Oct 5', 'tweets': 351},
    {'date': 'Oct 6', 'tweets': 197},
    {'date': 'Oct 7', 'tweets': 234},
    {'date': 'Oct 8', 'tweets': 263},
    {'date': 'Oct 9', 'tweets': 670},
    {'date': 'Oct 10', 'tweets': 1601},
    {'date': 'Oct 11', 'tweets': 717},
    {'date': 'Oct 12', 'tweets': 830},
    {'date': 'Oct 13', 'tweets': 457},
    {'date': 'Oct 14', 'tweets': 419},
    {'date': 'Oct 15', 'tweets': 1110},
    {'date': 'Oct 16', 'tweets': 1304},
    {'date': 'Oct 17', 'tweets': 826},
    {'date': 'Oct 18', 'tweets': 752},
    {'date': 'Oct 19', 'tweets': 829},
    {'date': 'Oct 20', 'tweets': 615},
    {'date': 'Oct 21', 'tweets': 696},
    {'date': 'Oct 22', 'tweets': 2415},
    {'date': 'Oct 23', 'tweets': 2587},
    {'date': 'Oct 24', 'tweets': 1495},
    {'date': 'Oct 25', 'tweets': 5503},
    {'date': 'Oct 26', 'tweets': 8914},
    {'date': 'Oct 27', 'tweets': 5294},
    {'date': 'Oct 28', 'tweets': 3102},
    {'date': 'Oct 29', 'tweets': 3482},
    {'date': 'Oct 30', 'tweets': 3767},
    {'date': 'Dec 1', 'tweets': 2065},
    {'date': 'Dec 2', 'tweets': 1935},
    {'date': 'Dec 3', 'tweets': 1582}
];

var resetdata = [
    {'date': 'Oct 5', 'tweets': 12304},
    {'date': 'Oct 6', 'tweets': 9242},
    {'date': 'Oct 7', 'tweets': 4684},
    {'date': 'Oct 8', 'tweets': 11808},
    {'date': 'Oct 9', 'tweets': 15726},
    {'date': 'Oct 10', 'tweets': 21380},
    {'date': 'Oct 11', 'tweets': 15095},
    {'date': 'Oct 12', 'tweets': 27302},
    {'date': 'Oct 13', 'tweets': 11893},
    {'date': 'Oct 14', 'tweets': 9289},
    {'date': 'Oct 15', 'tweets': 26630},
    {'date': 'Oct 16', 'tweets': 23796},
    {'date': 'Oct 17', 'tweets': 16015},
    {'date': 'Oct 18', 'tweets': 18377},
    {'date': 'Oct 19', 'tweets': 19600},
    {'date': 'Oct 20', 'tweets': 12349},
    {'date': 'Oct 21', 'tweets': 17350},
    {'date': 'Oct 22', 'tweets': 47256},
    {'date': 'Oct 23', 'tweets': 38099},
    {'date': 'Oct 24', 'tweets': 29495},
    {'date': 'Oct 25', 'tweets': 134877},
    {'date': 'Oct 26', 'tweets': 151604},
    {'date': 'Oct 27', 'tweets': 67959},
    {'date': 'Oct 28', 'tweets': 44004},
    {'date': 'Oct 29', 'tweets': 53237},
    {'date': 'Oct 30', 'tweets': 60473},
    {'date': 'Dec 1', 'tweets': 35663},
    {'date': 'Dec 2', 'tweets': 30615},
    {'date': 'Dec 3', 'tweets': 18634}
];  
  
var x = 60;
var y = 15;
var h = 225;
var w = 600; 
var bh = 190;
  
var xScale = d3.scale.ordinal()
    .domain(_.pluck(data, "date"))
    .rangeBands([0, w], 0.05)
    
var yScale = d3.scale.linear()
    .domain([0, d3.max(data, function(d) { return d.tweets; }) ])
    .range([0, bh]);
    // .range([bh - 5, 5]);

//var yScale2 = d3.scale.linear()
  //  .domain([0, d3.max(data, function(d) { return d.tweets; }) ])
   // .range([0, bh]);
  //  .range([bh - 5, 5]);

//var yPone = d3.scale.linear()
  //  .domain([0, d3.max(data, function(d) { return d.tweets; }) ])
  //  .range([190, 0])

//var yFilterScale = d3.scale.linear()
var padding = 30;

var yInverse = d3.scale.linear()
    .domain([0, d3.max(data, function(d) { return d.tweets; })])
    .range([bh, 0]);

var yAxis = d3.svg.axis()
    .scale(yInverse)
    .orient("left")

var chart = svg.append("g")
    .attr("transform", "translate(" + [x,y] + ")");

chart.append("rect")
  .attr({
    id: "bg",
    height: h,
    width: w,
    fill: "lightgrey"
  })  
  
chart.append("g")
  .attr("id", "points") 
  
//start of the function
function makeBars(data) {   

yInverse
  .domain([0, d3.max(data, function(d) { return d.tweets; }) ])
  
yScale
  .domain([0, d3.max(data, function(d) { return d.tweets; }) ])
  
var myBars = chart.select("#points").selectAll("rect")
      .data(data, function(d) { return d.date });
  
  myBars.enter()  
    .append("rect")
    .classed("bars", true)
    .attr({
      width: xScale.rangeBand(),
      x: function(d, i) {
        return xScale(d.date)
      }, 
      y: 200
    }); 
    //initial total tweet text
    
  //axis
  chart.append("g")
  .attr("class", "axis")
  .attr("transform", "translate(-5, " + (10) + ")")
  .call(yAxis);
  
    //mouseover and mouseout
  myBars.on('mouseover', function(d, i) {
    d3.select(this).style('fill', 'steelblue');
    hoverTextTweet
		.text(d.tweets + " tweets")
          .attr("text-anchor", "start")
          .attr("fill", "stellblue")
          .attr("x", 65)
          .attr("y", 42);
    hoverTextDate
      .text(d.date + ": ")
      .attr("x", 12)
      .attr("y", 42)
  });
  myBars.on('mouseout', function(d, i) {
    hoverTextTweet
      .text("")
    hoverTextDate
        .text("")
    d3.select(this).style('fill', 'black');
  });
 
     
  myBars.exit()
    .transition()
    .duration(1000)
    .attr({
      height: 0,
      y: 225
    })
    .remove()
  
  myBars
    .transition() 
    .duration(1000) 
    .attr({
      width: xScale.rangeBand(),
      height: function(d, i) {
        return yScale(d.tweets)
      },
      x: function(d, i) {
        return xScale(d.date)//(i * 22) + 114; 
      },
      y: function(d, i) {
        return bh + 10 - yScale(d.tweets)
      }
  });


} //END OF INITIAL FUNCTION
makeBars(data); 

//y axis
//chart.append("g")
//  .attr("class", "axis")
//  .attr("transform", "translate(-5, " + (10) + ")")
//  .call(yAxis);

//Positive clicks
buttonPositive 
  .on("click", function() {
    makeBars(pos_data);
	var sum = d3.sum(pos_data, function(d) { return d.tweets })
        chart.select("#clicks")
          .text("Total positive posts: " + sum)
          .attr("x", 10)  
          .attr("y", 20)
    posbar
      .attr("fill", "green")
    negbar
      .attr("fill", "black")
//Transitioning Axis
   chart.select(".axis")
     .transition()
     .duration(1000)
     .remove(yAxis)
     .call(yAxis)
     .remove(yAxis);
    })
//Negative clicks
buttonNegative
  .on("click", function() {
    makeBars(neg_data);
    var sum = d3.sum(neg_data, function(d) { return d.tweets })
        chart.select("#clicks")
          .text("Total negative posts: " + sum)
          .attr("x", 10)
          .attr("y", 20)
     posbar
       .attr("fill", "black")
     negbar
       .attr("fill", "red")
       //Transitioning Axis
   chart.select(".axis")
     .transition()
     .duration(1000)
     .remove(yAxis)
     .call(yAxis)
     .remove(yAxis);
    })

//Reset button
buttonReset
  .on("click", function() {
    makeBars(resetdata);
    var sum = d3.sum(resetdata, function(d) { return d.tweets })
        chart.select("#clicks")
          .text("Total posts: " + sum)
          .attr("x", 10)
          .attr("y", 20)
    posbar
      .attr("fill", "black")
    negbar
      .attr("fill", "black")
      //Transitioning Axis
   chart.select(".axis")
     .transition()
     .duration(1000)
     .remove(yAxis)
     .call(yAxis)
     .remove(yAxis);
    })
  
          
var dataText = chart.append("text")
  .attr("id", "clicks");

var hoverTextDate = chart.append("text");
var hoverTextTweet = chart.append("text");

//start of linking to second visual
var second = svg.append("g")
    .attr("transform", "translate(" + [673,15] + ")");

second.append("rect")
  .attr({
    id: "bg",
    height: h,
    width: 200,
    fill: "lightgrey",
  })
   
var posbar = second.append("rect")
    .attr("width", 18 * 6)
    .attr("height", 20)
    .attr("x", 58)
    .attr("y", 80)

var negbar = second.append("rect")
    .attr("width", 12 * 6)
    .attr("height", 20)
    .attr("x", 58)
    .attr("y", 101)
    
second.append("text")
  .text("positive")
  .attr("x", 10)
  .attr("y", 93)
  .style("font-size", 12)
  //.attr("alignment-baseline", "hanging")
  
second.append("text")
  .text("negative")
  .attr("x", 10)
  .attr("y", 115)
  .style("font-size", 12)
  //.attr("alignment-baseline", "hanging")
  
second.append("text")
  .text("18%")
  .attr("x", 170)
  .attr("y", 93)
  .style("font-size", 12)
  //.attr("alignment-baseline", "hanging")
  
second.append("text") 
  .text("13%")
  .attr("x", 135)
  .attr("y", 115)
  .style("font-size", 12)
  //.attr("alignment-baseline", "hanging")