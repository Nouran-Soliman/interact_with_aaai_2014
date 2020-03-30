

function createPlotData(json){
    var topics = {}
    var keywords = {}
    var groups = {}
    var authors = {}

    var topics_plt = []
    var keywords_plt = []
    var groups_plt = []
    var authors_plt = []

    for (index = 0; index < json.length; index++) {
        var ent = json[index];
        if(ent.Authors1) if(authors.hasOwnProperty(ent.Authors1)) authors[ent.Authors1] ++; else authors[ent.Authors1] = 1;
        if(ent.Authors2) if(authors.hasOwnProperty(ent.Authors2)) authors[ent.Authors2] ++; else authors[ent.Authors2] = 1;
        if(ent.Authors3) if(authors.hasOwnProperty(ent.Authors3)) authors[ent.Authors3] ++; else authors[ent.Authors3] = 1;
        if(ent.Authors4) if(authors.hasOwnProperty(ent.Authors4)) authors[ent.Authors4] ++; else authors[ent.Authors4] = 1;
        if(ent.Authors5) if(authors.hasOwnProperty(ent.Authors5)) authors[ent.Authors5] ++; else authors[ent.Authors5] = 1;
        if(ent.Authors6) if(authors.hasOwnProperty(ent.Authors6)) authors[ent.Authors6] ++; else authors[ent.Authors6] = 1;
        if(ent.Authors7) if(authors.hasOwnProperty(ent.Authors7)) authors[ent.Authors7] ++; else authors[ent.Authors7] = 1;

        if(ent.Groups1) if(groups.hasOwnProperty(ent.Groups1)) groups[ent.Groups1] ++; else groups[ent.Groups1] = 1;
        if(ent.Groups2) if(groups.hasOwnProperty(ent.Groups2)) groups[ent.Groups2] ++; else groups[ent.Groups2] = 1;
        if(ent.Groups3) if(groups.hasOwnProperty(ent.Groups3)) groups[ent.Groups3] ++; else groups[ent.Groups3] = 1;
        if(ent.Groups4) if(groups.hasOwnProperty(ent.Groups4)) groups[ent.Groups4] ++; else groups[ent.Groups4] = 1;
        if(ent.Groups5) if(groups.hasOwnProperty(ent.Groups5)) groups[ent.Groups5] ++; else groups[ent.Groups5] = 1;
        if(ent.Groups6) if(groups.hasOwnProperty(ent.Groups6)) groups[ent.Groups6] ++; else groups[ent.Groups6] = 1;
        if(ent.Groups7) if(groups.hasOwnProperty(ent.Groups7)) groups[ent.Groups7] ++; else groups[ent.Groups7] = 1;
        if(ent.Groups8) if(groups.hasOwnProperty(ent.Groups8)) groups[ent.Groups8] ++; else groups[ent.Groups8] = 1;

        if(ent.Keywords1) if(groups.hasOwnProperty(ent.Keywords1)) keywords[ent.Keywords1] ++; else keywords[ent.Keywords1] = 1;
        if(ent.Keywords2) if(groups.hasOwnProperty(ent.Keywords2)) keywords[ent.Keywords2] ++; else keywords[ent.Keywords2] = 1;
        if(ent.Keywords3) if(groups.hasOwnProperty(ent.Keywords3)) keywords[ent.Keywords3] ++; else keywords[ent.Keywords3] = 1;
        if(ent.Keywords4) if(groups.hasOwnProperty(ent.Keywords4)) keywords[ent.Keywords4] ++; else keywords[ent.Keywords4] = 1;
        if(ent.Keywords5) if(groups.hasOwnProperty(ent.Keywords5)) keywords[ent.Keywords5] ++; else keywords[ent.Keywords5] = 1;
        if(ent.Keywords6) if(groups.hasOwnProperty(ent.Keywords6)) keywords[ent.Keywords6] ++; else keywords[ent.Keywords6] = 1;
        if(ent.Keywords7) if(groups.hasOwnProperty(ent.Keywords7)) keywords[ent.Keywords7] ++; else keywords[ent.Keywords7] = 1;
        if(ent.Keywords8) if(groups.hasOwnProperty(ent.Keywords8)) keywords[ent.Keywords8] ++; else keywords[ent.Keywords8] = 1;
        if(ent.Keywords9) if(groups.hasOwnProperty(ent.Keywords9)) keywords[ent.Keywords9] ++; else keywords[ent.Keywords9] = 1;
        if(ent.Keywords10) if(groups.hasOwnProperty(ent.Keywords10)) keywords[ent.Keywords10] ++; else keywords[ent.Keywords10] = 1;

        if(ent.Topics1) if(topics.hasOwnProperty(ent.Topics1)) topics[ent.Topics1] ++; else topics[ent.Topics1] = 1;
        if(ent.Topics2) if(topics.hasOwnProperty(ent.Topics2)) topics[ent.Topics2] ++; else topics[ent.Topics2] = 1;
        if(ent.Topics3) if(topics.hasOwnProperty(ent.Topics3)) topics[ent.Topics3] ++; else topics[ent.Topics3] = 1;
        if(ent.Topics4) if(topics.hasOwnProperty(ent.Topics4)) topics[ent.Topics4] ++; else topics[ent.Topics4] = 1;
        if(ent.Topics5) if(topics.hasOwnProperty(ent.Topics5)) topics[ent.Topics5] ++; else topics[ent.Topics5] = 1;
        if(ent.Topics6) if(topics.hasOwnProperty(ent.Topics6)) topics[ent.Topics6] ++; else topics[ent.Topics6] = 1;
        if(ent.Topics7) if(topics.hasOwnProperty(ent.Topics7)) topics[ent.Topics7] ++; else topics[ent.Topics7] = 1;
        if(ent.Topics8) if(topics.hasOwnProperty(ent.Topics8)) topics[ent.Topics8] ++; else topics[ent.Topics8] = 1;
        if(ent.Topics9) if(topics.hasOwnProperty(ent.Topics9)) topics[ent.Topics9] ++; else topics[ent.Topics9] = 1;
        if(ent.Topics10) if(topics.hasOwnProperty(ent.Topics10)) topics[ent.Topics10] ++; else topics[ent.Topics10] = 1;
    }

    function sum(obj) {
        return Object.keys(obj).reduce((sum,key)=>sum+parseFloat(obj[key]||0),0);
    }

    Object.keys(authors).forEach(function(key) {
        var dict = {name:key, value: authors[key]};
        authors_plt.push(dict);
    });

    Object.keys(groups).forEach(function(key) {
        var tot = sum(groups);
        var dict = {name:key, value: groups[key]*100/tot, cnt: groups[key]};
        groups_plt.push(dict);
    });

    Object.keys(keywords).forEach(function(key) {
        var tot = sum(keywords);
        var dict = {name:key, value: keywords[key]*100/tot, cnt: keywords[key]};
        keywords_plt.push(dict);
    });

    Object.keys(topics).forEach(function(key) {
        var tot = sum(topics);
        var dict = {name:key, value: topics[key]*100/tot};
        topics_plt.push(dict);
    });

    console.log(authors_plt);
    console.log(keywords_plt);

    console.log(topics_plt);
    console.log(groups_plt);

    return [groups_plt, topics_plt, keywords_plt, authors_plt];
}

$.getJSON("AAAI-14_cleaned_data.json", function(json) { 

data = createPlotData(json)[0];

var margin = {top: 10, right: 10, bottom: 100, left: 40},
    margin2 = {top: 430, right: 10, bottom: 20, left: 40},
    width = 750 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom,
    height2 = 500 - margin2.top - margin2.bottom;

var x = d3.scale.ordinal().rangeBands([0, width], .1),
    x2 = d3.scale.ordinal().rangeBands([0, width], .1),
    y = d3.scale.linear().range([height, 0]),
    y2 = d3.scale.linear().range([height2, 0]);

var xAxis = d3.svg.axis().scale(x).orient("bottom"),
    xAxis2 = d3.svg.axis().scale(x2).orient("bottom").tickValues([]),
    yAxis = d3.svg.axis().scale(y).orient("left");

		x.domain(data.map(function(d){ return d.name}));
	  y.domain([0, d3.max(data, function(d) { return d.value;})]);
  	x2.domain(x.domain());
	  y2.domain(y.domain());
		
  var brush = d3.svg.brush()
				.x(x2) 
				.on("brush", brushed);

var svg = d3.select("#sidebar").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom);

var focus = svg.append("g")
    .attr("class", "focus")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
	
var context = svg.append("g")
    .attr("class", "context")
    .attr("transform", "translate(" + margin2.left + "," + margin2.top + ")");

  focus.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);
    //   .selectAll("text")  
    //   .style("text-anchor", "end")
    //   .attr("dx", "-.8em")
    //   .attr("dy", ".15em")
    //   .attr("transform", "rotate(-65)");

  focus.append("g")
      .attr("class", "y axis")
      .call(yAxis);
	 
  console.log(x(data[0].name))
  enter(data)
  updateScale(data)
  
  var subBars = context.selectAll('.subBar')
                                  	.data(data)
	
  subBars.enter().append("rect")
		  .classed('subBar', true)
			.attr(
    	{
        height: function (d)
        {
          return height2 - y2(d.value);
        },
        width: function(d){ return x.rangeBand()},
        x: function(d) {

          return x2(d.name);
        },
        y: function(d)
        {
          return y2(d.value)
        }
      })

  context.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height2 + ")")
      .call(xAxis2);

  context.append("g")
      .attr("class", "x brush")
      .call(brush)
    .selectAll("rect")
      .attr("y", -6)
      .attr("height", height2 + 7);
  



function brushed() {
    var selected = null; 
      selected =  x2.domain()
                .filter(function(d){
                 		return (brush.extent()[0] <= x2(d)) && (x2(d) <= brush.extent()[1]);
							});
  
    var start;
    var end;
		
  	if(brush.extent()[0] != brush.extent()[1])
      {
        start = selected[0];
        end = selected[selected.length - 1];
        
      } else { 
				start = 0;
				end = data.length;
      }
    var strtInd = 0;
    var endInd = 0;

    for(index = 0; index < data.length; index++){
        if(data[index].name == start)
            strtInd = index;
        else if(data[index].name == end)
            endInd = index;
    }
   console.log(strtInd)
    var updatedData = data.slice(strtInd, endInd);
    
    update(updatedData);
    enter(updatedData);
    exit(updatedData);
  	updateScale(updatedData);
}
 
  function updateScale(data)
  { 
    
    var tickScale = d3.scale.pow().range([data.length / 10, 0]).domain([data.length, 0]).exponent(.5)
   
    var brushValue = brush.extent()[1] - brush.extent()[0];
    if(brushValue === 0){
      brushValue = width;
    }

    var tickValueMultiplier = Math.ceil(Math.abs(tickScale(brushValue)));  
    var filteredTickValues = data.filter(function(d, i){return i }).map(function(d){ return d.name})

    // console.log("DEDDDDUG");
    // console.log(tickScale);
    // console.log(brushValue);
    // console.log(filteredTickValues); 

    focus.select(".x.axis").call(xAxis.tickValues(filteredTickValues));
    focus.select(".y.axis").call(yAxis);
  }
  
  function update(data)
  {
		  x.domain(data.map(function(d){ return d.name}));
		  y.domain([0, d3.max(data, function(d) { return d.value;})]);

      var bars =  focus.selectAll('.bar')
          .data(data)
      bars
        .attr(
        {  
          height: function (d, i)
          { 
            return height - y(d.value);
          },
          width: function(d){ 
            return x.rangeBand()
          },
          x: function(d) {

            return x(d.name);
          },
          y: function(d)
          {
            return y(d.value)
          }
        })

  } 
  
  function exit(data)
  {
		var bars =  focus.selectAll('.bar').data(data)
		bars.exit().remove()
  }
  
  function enter(data)
  {
    	x.domain(data.map(function(d){ return d.name}));
		  y.domain([0, d3.max(data, function(d) { return d.value;})]);

      var bars =  focus.selectAll('.bar')
          .data(data)
      bars.enter().append("rect")
        .classed('bar', true)
        .attr(
        {  
          height: function (d, i)
          { 
            return height - y(d.value);
          },
          width: function(d){ 
            return x.rangeBand()
          },
          x: function(d) {
 
            return x(d.name);
          },
          y: function(d)
          {
            return y(d.value)
          }
        })
  }

});
