var margin = {top: 30, right: 75, bottom: 30, left: 75},
			width = 1000 - margin.left - margin.right,
			height = 270 - margin.top - margin.bottom;

		var parseDate = d3.time.format("%d-%b-%y").parse;

		var formatTime = d3.time.format("%B %e");

		var x = d3.time.scale()
			.range([0, width]);

		var y0 = d3.scale.linear()
			.range([height, 0]);

		var y1 = d3.scale.linear()
			.range([height, 0]);

		var xAxis = d3.svg.axis()
			.scale(x)
			.orient("bottom")
			.ticks(5);

		var yAxisLeft = d3.svg.axis()
			.scale(y0)
			.orient("left")
			.ticks(6);

		var yAxisRight = d3.svg.axis()
			.scale(y1)
			.orient("right")
			.ticks(6);

		var valueline = d3.svg.line()
			.interpolate("cardinal")
			.x(function(d) { return x(d.date); })
			.y(function(d) { return y0(d.impr); });

		var valueline2 = d3.svg.line()
			.interpolate("cardinal")
			.x(function(d) { return x(d.date); })
			.y(function(d) { return y1(d.click); });

		var svg = d3.select("#lineViz")
			.append("svg")
				.attr({
					width: width + margin.left + margin.right,
					height: height + margin.top + margin.bottom
				})
			.append("g")
				.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

		d3.csv("line/dataReal.csv", function(error, data) { 
			data.forEach(function(d) {
				d.date = parseDate(d.date);
				d.impr = +d.impr;
				d.click = +d.click;
			});

		x.domain(d3.extent(data, function(d) { return d.date; }));
		y0.domain([0, d3.max(data, function(d) { return Math.max(d.impr); })]);
		y1.domain([0, d3.max(data, function(d) { return Math.max(d.click); })]);

		svg.append("path")
			.attr("d", valueline(data))
			.style("opacity", 0.5);

		svg.append("path")
			.attr("class", "line")
			.style("stroke", "#737373")
			.style("opacity", 0.5)
			.attr("d", valueline2(data));

		svg.selectAll("dot")
			.data(data)
			.enter()
			.append("circle")
				.attr("r", 2)
				.style("fill", "steelblue")
				.attr("class", "imprdot")
				.attr("cx", function(d) { return x(d.date); })
				.attr("cy", function(d) { return y0(d.impr); });

		svg.selectAll("dot")
			.data(data)
			.enter()
			.append("circle")
				.attr("r", 2)
				.style("fill", "#737373")
				.attr("class", "clickdot")
				.attr("cx", function(d) { return x(d.date); })
				.attr("cy", function(d) { return y1(d.click); });

		svg.append("g")
			.attr("class", "x axis")
			.attr("transform", "translate(0," + height + ")")
			.call(xAxis);

		svg.append("g")
			.attr("class", "y axis")
			//.style("fill", "steelblue")
			.call(yAxisLeft)
		.append("text")
			.attr("transform", "rotate(-90)")
			.attr("y", 7)
			.attr("dy", ".71em")
			.style("text-anchor", "end")
			.style("fill", "steelblue")
			.text("Impressions");

		svg.append("g")
			.attr("class", "y axis")
			.attr("transform", "translate(" + width + ", 0)")
			//.style("fill", "red")
			.call(yAxisRight)
		.append("text")
			.attr("transform", "rotate(-90)")
			.attr("y", -17)
			.attr("dy", ".71em")
			.style("text-anchor", "end")
			.style("fill", "#737373")
			.text("Clicks");

		})

		$('svg circle.clickdot').tipsy({
            html: true,
            live: true,
            fade: true,
            gravity: 'nw',
            title: function () {
                var d = this.__data__;
                //var pName = d.name;
                return formatTime(d.date) + "<br/>" + 'Clicks: ' + d.click;
                //return 'clicks: ' + d.click;
            }
        });

        $('svg circle.imprdot').tipsy({
            html: true,
            live: true,
            fade: true,
            gravity: 'nw',
            title: function () {
                var d = this.__data__;
                //var pName = d.name;
                return formatTime(d.date) + "<br/>" + 'Impressions: ' + d.click;
                //return 'impressions: ' + d.impr;
            }
        });
