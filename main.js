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
        var tot = sum(authors);
        var dict = {name:key, value: authors[key]*100/tot, cnt: authors[key]};
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
        var dict = {name:key, value: topics[key]*100/tot, cnt: topics[key]};
        topics_plt.push(dict);
    });

    console.log(authors_plt);
    console.log(keywords_plt);

    console.log(topics_plt);
    console.log(groups_plt);

    return [topics_plt, groups_plt, authors_plt, keywords_plt];
}

var mapDes = {"Groups": "This tab displays <span style='color:orange'> percentage of papers (y-axis) </span> in each <span style='color:orange'> research Group (x-axis) </span> in the conference. A group consists of a set of research topics. Hover on bars for more tooltip details and use the brushing feature by drawing the area of interest on the gray chart to zoom-in on the selected area.",
              "Topics": "This tab displays <span style='color:orange'> percentage of papers (y-axis) </span> in each <span style='color:orange'> research topic (x-axis) </span> in the conference. Hover on bars for more tooltip details and use the brushing feature by drawing the area of interest on the gray chart to zoom-in on the selected area.",
              "Authors": "This tab displays <span style='color:orange'> percentage of papers (y-axis) </span> published by each <span style='color:orange'> author (x-axis) </span> in the conference. Hover on bars for more tooltip details and use the brushing feature by drawing the area of interest on the gray chart to zoom-in on the selected area."}
var gFilteredData;

function createBrushedBarChart(idName, data){
        data.sort(function(a, b) {
            return d3.descending(a.value, b.value)
        });

        var tabb = document.getElementById(idName);
        tabb.innerHTML = "<p>"+ mapDes[idName] +"</p>";
        var line = "<hr>";        
        tabb.innerHTML += line;

        tabb.innerHTML += "<h4 id='"+ idName +"_tab' class='barsTitle'> </h4>";
        var title = document.getElementById(idName+"_tab");
        title.innerHTML = "Percentage of papers per " + idName.slice(0, -1);
        tabb.innerHTML += "<div style='float:right'> <div> <span class='stats'> Most frequent: </span> <span>" + data[0].name+" (count: "+data[0].cnt+")</span> </div> <div> <span class='stats'> Least frequent: </span> <span>" + data[data.length-1].name+" (count: "+data[data.length-1].cnt+")</span> </div> <div> <span class='stats'> Median: </span> <span>" + data[Math.floor((data.length-1) /2)].name+" (count: "+data[Math.floor((data.length-1)/2)].cnt+")</span> </div> </div>";
        
        tabId = '#'+ idName;
        var margin = {top: 10, right: 10, bottom: 100, left: 40},
        margin2 = {top: 430, right: 10, bottom: 20, left: 40},
        width = 1050 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom,
        height2 = 500 - margin2.top - margin2.bottom;
        var clicks = 0;

        // document.getElementById("sort").onclick = function(d){ 
        //     console.log(idName);
        //     clicks ++;
        //     if(clicks == 3) clicks = 0;
        //     arrange(clicks); }
        
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

    var svg = d3.select(tabId).append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .on("dblclick",function(d){ 
            console.log(idName);
            createBrushedBarChart(idName, data); //here when dbl
        
            var papersDiv = document.getElementById("papers"); 
            papersDiv.innerHTML = "<h2>Papers Display Grid ("+gFilteredData.length+" papers)</h2>";
            
            for(i = 0; i < gFilteredData.length; i++){
                var para = createPaperCard(gFilteredData[i], i);
                document.getElementById("papers").appendChild(para); 
            }

        });
    

    var focus = svg.append("g")
        .attr("class", "focus")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        
    var context = svg.append("g")
        .attr("class", "context")
        .attr("transform", "translate(" + margin2.left + "," + margin2.top + ")");

    focus.append("g")
          .attr("class", "x axis")
          .attr("transform", "translate(0," + height + ")")
          .call(xAxis)
          .selectAll("text").remove()
       
    focus.append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
            .attr("text-anchor", "middle")  
            .attr("transform", "translate("+ 0 +","+(-height/200)+")rotate(0)") 
            .text("Percentage");
        
    console.log(x(data[0].name))
    //here in the begining
    enter(data)
    updateScale(data)

    var papersDiv = document.getElementById("papers"); 
    papersDiv.innerHTML = "<h2>Papers Display Grid ("+gFilteredData.length+" papers)</h2>";
    
    for(i = 0; i < gFilteredData.length; i++){
        var para = createPaperCard(gFilteredData[i], i);
        document.getElementById("papers").appendChild(para); 
    }
    
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

    function arrange(clicks){
        if(clicks == 0)
            data.sort(function(a, b) {
                return d3.descending(a.value, b.value)
            });
        else if(clicks == 1)
            data.sort(function(a, b) {
                return d3.ascending(a.value, b.value)
            });
        else if(clicks == 2)
        data.sort(function(a, b) {
            return d3.ascending(a.name, b.name)
          });

        update(data);
        enter(data);
        exit(data);
        updateScale(data);
    }

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
        //here when brushed
        update(updatedData);
        enter(updatedData);
        exit(updatedData);
        updateScale(updatedData);

        var papersDiv = document.getElementById("papers"); 

        var papNum = 0;
        papersDiv.innerHTML = "<h2 id='papNum'>Papers Display Grid ("+papNum+" papers)</h2>";

        for(j = 0; j < gFilteredData.length; j++){
            for(i = 0; i < updatedData.length; i++){
                if(gFilteredData[j][idName].includes(updatedData[i].name)){
                    papNum++;
                    var para = createPaperCard(gFilteredData[j], j);
                    document.getElementById("papers").appendChild(para); 
                    break;
                }
            }
        }

        document.getElementById("papNum").innerHTML = "Papers Display Grid ("+papNum+" papers)";

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

        focus.select(".x.axis").call(xAxis.tickValues(''));
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
            

        var tooltip = d3.select("body").append("div").attr("class", "toolTip");

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
            .on("mousemove", function(d){
                tooltip
                  .style("left", d3.event.pageX - 50 + "px")
                  .style("top", d3.event.pageY - 70 + "px")
                  .style("display", "inline-block")
                  .html((d.name) + "<br>" + "Percentage: " + (Number.parseFloat(d.value).toPrecision(1)) + ", Count: " + (d.cnt) );
        
                d3.select(this).attr("fill", "brown");
                
            })
            .on("mouseout", function(d){ 
                tooltip.style("display", "none");
                d3.select(this).attr("fill", "orange"); });
    }
     
    
}

function createBarChart(svgId, pltData){

    var data = pltData;

    var tooltip = d3.select("body").append("div").attr("class", "toolTip");
    var height = 150;
    var width = 300;
    var margin = ({top: 20, right: 20, bottom: 20, left: 20});
    
    var x = d3.scaleBand()
        .domain(data.map(d => d.name))
        .range([margin.left, width - margin.right])
        .padding(0.1);
    
    var y = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.value)])
        .range([height - margin.bottom, margin.top]);
    
    var xAxis = g => g
    .style("font", "10px times")
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x))
    .selectAll("text")  
    .style("text-anchor", "end")
    .attr("dx", "-.8em")
    .attr("dy", ".15em")
    .attr("transform", "rotate(-90)");
    
    
    var yAxis = g => g
    .style("font", "3px")
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y).ticks(4));
    
    var svg = d3.select(svgId);
    
    var g = svg.append("g").attr("fill", "orange");
    
    g.selectAll("rect")
    .data(data.sort(function(a, b){return b.value - a.value}))
    //.data(data)
    .join("rect")
    .attr("x", d => x(d.name))
    .attr("y", d => y(d.value))
    .attr("height", d => y(0) - y(d.value))
    .attr("width", x.bandwidth())
    .on("mousemove", function(d){
        tooltip
          .style("left", d3.event.pageX - 50 + "px")
          .style("top", d3.event.pageY - 70 + "px")
          .style("display", "inline-block")
          .html((d.name) + "<br>" + (d.value));

        d3.select(this).attr("fill", "brown");
    })
    .on("mouseout", function(d){ 
        tooltip.style("display", "none");
        d3.select(this).attr("fill", "orange"); });

    
    svg.append("g").call(xAxis);
    
    svg.append("g").call(yAxis); 
  
    
}

function createPaperCard(entry, index){
    var para = document.createElement("div");
    para.classList.add('col-xs-6');
    para.classList.add('col-lg-4');
    para.style.outline = '1px solid orange';
    para.style.height = '210px';
    para.style.margin = '10px 0px 0px 0px';
    para.id = "paper_"+index;

    var tit = document.createElement("h4");
    tit.innerHTML = entry.Title;
    para.appendChild(tit);

    tit = document.createElement("P");
    tit.innerHTML = entry.Authors.replace(' ,', ', ');
    para.appendChild(tit);

    tit = document.createElement("P");
    // tit.style.position = 'absolute';
    // tit.style.bottom = 0;
    // tit.style.right = 0;
    var tit2 = document.createElement("a");
    tit2.classList.add('button');
    tit2.classList.add('btn-view');
    tit2.id = "bt_"+index;
    tit2.href = "#"
    tit2.innerHTML = "View details &raquo;";
    tit2.onclick = function(event){
        document.getElementById("quickviewContent").innerHTML = "<h4 style='color:orange'>" + entry.Title + "</h4> <h5 style='color:orange'> Abstract </h5> <p style='width:680px;margin: 0 auto;' align='justify'>" + entry.Abstract +"</p> <h5 style='color:orange'> Authors </h5> <p>"+entry.Authors.replace(' ,', ', ')+"</p> <h5 style='color:orange'> Keywords </h5> <p>" +entry.Keywords.replace(/;/g, ', ')+"</p> <h5 style='color:orange'> Topics</h5> <p>"+entry.Topics.replace(/;/g, ', ')+"</p> <h5 style='color:orange'> Groups </h5> <p>"+entry.Groups.replace(/;/g, ', ')+"</p>"; 
        event.preventDefault();
        $('#quick-view-pop-up').fadeToggle("slow");
        $('#quick-view-pop-up').css({position:"absolute", top:event.pageY-300, left: event.pageX-300});
        $('.mask').fadeToggle();
        console.log("quick view");
    };
    tit.appendChild(tit2);

    var div = document.createElement("div");
    div.classList.add('quick-view-controller');
    div.appendChild(tit);
    para.appendChild(div);

    console.log("INDEXXXX", index);
    
    return para;
}
var indMap = {0:"Topics", 1: "Groups", 2: "Authors"};

function updateTab(evt, disp){
    var i, tabcontent, tablinks, saveI;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        if(tabcontent[i].style.display === "block"){
            saveI = i;
        }
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(disp).style.display = "block";
    evt.currentTarget.className += " active";

    createBrushedBarChart(indMap[saveI], createPlotData(gFilteredData)[saveI]);
    console.log("NOURAN::: ", gFilteredData.length);

}

function Main(json){
    console.log(json);
    gFilteredData = json;
    //create plot data 
    if(document.getElementById("Groups").style.display != "block" && document.getElementById("Authors").style.display != "block"){
        document.getElementById("btn_topics").className += " active";
        document.getElementById("Topics").style.display = "block";
    }
    
    // var papersDiv = document.getElementById("papers"); 
    // papersDiv.innerHTML = "<h2>Papers Display Grid ("+json.length+" papers)</h2>";

    //create papers grid
    if(json.length > 0){
        var pltData = createPlotData(json);

        //plot data in tabs
        createBrushedBarChart('Topics', pltData[0]);
        createBrushedBarChart('Groups', pltData[1]);
        createBrushedBarChart('Authors', pltData[2]);

        // for (index = 0; index < json.length; index++) {
        //     var para = createPaperCard(json[index], index);
        //     document.getElementById("papers").appendChild(para); 
        // }

        $('.mask').on('click', function(){
            $('.mask').fadeOut();
            $('#quick-view-pop-up').fadeOut();
            document.getElementById("quickviewContent").innerHTML = "";
            console.log("mask clicked");
        });
    
        $('.quick-view-close').on('click', function(){
            $('.mask').fadeOut();
            $('#quick-view-pop-up').fadeOut();
            document.getElementById("quickviewContent").innerHTML = "";
            console.log("quick-view-close clicked");
        });

    }
    else {
        document.getElementById("Groups").innerHTML = "No records found";
        document.getElementById("Topics").innerHTML = "No records found";
        document.getElementById("Authors").innerHTML = "No records found";
        document.getElementById("papers").innerHTML = "No records found";
    }

 

    //createBrushedBarChart(pltData[2]);
   
    //create graphs
    //createBarChart('#groups_svg', pltData[0]);
    //createBarChart('#topics_svg', pltData[1]);
    //createBarChart('#authors_svg', pltData[3]);
    //createBarChart('#keywords_svg', pltData[2]);

}
function filterData(searchType, searchKey, json){
    var data = []
    searchType += "s";
    if(searchType == "Nones") return json;
    else if (searchType === "Titles") searchType= "Title";
    for(index=0; index<json.length; index++){
        var ent = json[index];
        if(ent[searchType].toLowerCase().includes(searchKey.toLowerCase()))
            data.push(ent);
    }
    console.log("FILTERED DATA: ", data.length, data);
    return data;
}

$(document).ready(function () {
    $(".dropdown-toggle").dropdown();
    $('[data-toggle="offcanvas"]').click(function () {
      $('.row-offcanvas').toggleClass('active')
    });
    $.getJSON("AAAI-14_cleaned_data.json", function(json) { 
        Main(json);
        document.getElementById("Filter").addEventListener("click", function(){ 
            var searchKey = document.getElementById("filterByText").value;
            var menu = document.getElementById("filterByType");
            var searchType = menu.options[menu.selectedIndex].text;
            var data = filterData(searchType, searchKey, json);
            Main(data);
        });

        document.getElementById("Reset").addEventListener("click", function(){ 
            document.getElementById("filterByText").value = "";
            var menu = document.getElementById("filterByType");
            menu.selectedIndex = 0;
            Main(json);
        });

        document.getElementById("writeup").addEventListener("click", function(event){
            document.getElementById("quickviewContent").innerHTML = "<div style='padding:20px' align='justify'> <h3 style='color:orange;text-align:center'> Writeup </h3> "+w1 + w2+"</div>";
            event.preventDefault();
            $('#quick-view-pop-up').fadeToggle("slow");
            $('#quick-view-pop-up').css({position:"absolute", top:event.pageY+30, left: event.pageX-1000, width:900});
            $('.mask').fadeToggle();
            console.log("quick view");
        });

    });
  });

  var w1 = "<h4 style='color:orange'> Design rationale </h4> <p> Most of the <a href='https://aaai.org/Library/AAAI/aaai14contents.php'> current conference proceedings </a> are in the form of listed paper titles with links to papers full text/further details opened in a new page which makes the process of exploring conference proceedings and doing literature reviews more hideous for researchers. The idea of this visualization tool is to create interactive conference proceedings which can be used to open up new and deeper ways of exploration of conference publications faster and easier by researchers. A number of datasets were explored and <a href='https://archive.ics.uci.edu/ml/datasets/AAAI+2014+Accepted+Papers'> AAAI 2014 conference dataset </a> was found to be the most suitable dataset for this task with respect to availability and dataset attributes. This dataset has important attributes like keywords, topics and groups that can interest researchers while looking for papers in the proceedings. For example, a researcher can be interested to read all the papers in the proceedings that contain a certain phrase like ‘machine learning’ in the title or topics. A python script was coded to clean the data by doing some splitting in the authors, groups, keywords and topics fields to be able to do further processing of the data to calculate the statistics of the data for the charts. </p> <p> The tool is designed in html, CSS and javascript. The tool is designed to be as simple and easy to use as possible. The title of the tool is displayed and a write-up button is included to include the writeup of the project in a popup window. The visualization tool consists of 3 main components: dynamic search query box, statistics summary box and papers display grid. </p> <h5 style='color:orange'> Dynamic Search Query Box </h5> <p>This box is used to filter out the data as wanted by the user. The user can filter by all the attributes available in the dataset: keyword, title, author, topic or group. After selecting a filtering option, the user can type in a string or a substring in the text box to get all papers that have their chosen method of filtering (keyword, group, title, etc) equal to or containing this string/substring. The user then can click on the filter button to display the filtered data. There is also a reset button to reset all filtering done and display all data. A simple placeholder is displayed in the text box to inform the user that they can type in a full string or substring of the searching keyword.</p> <h5 style='color:orange'> Statistics Summary Box </h5> <p> This box displays the summary of the statistics of the conference on the filtered data if any filtering option is selected from the search query box or on all data if none is selected. The statistics is calculated from the raw data (by transforming the data) by counting the number of papers for each topic, group and author for the filtered data. This box is composed of 3 tabs: Topics, groups and authors. At first the graphs were displayed all together each on a newline but this method was very overwhelming and ineffective to read. The graphs are added to a box with different tabs to save space and not overwhelm the user with 3 different graphs at the same time. Each tab is composed of a bar chart displaying the percentage of papers in each category. For example, in the Topics tab the bar chart displays the percentage of papers in each research topic (similarly in other tabs too for authors and groups). The box contains a very short description of what the bar chart represents with the axes labeled in orange in the text description. This description is added to aid the user understand what the bar chart is presenting and how to make use of it. The labels are added in the text description instead of adding them to the bar chart to make it look simpler. They are still colored in orange to be catchy without having to read the full description. The title of the bar chart is also included above the chart. Under the title, a statistics summary of the data is included to give the user a quick insight of what are the max, min and median topics or groups or authors. A user might be interested to know which topic has the most papers accepted or who is the most active author with the highest number of accepted papers. These summary labels are colored in orange to attract the attention of the user and deliver a quick sense of the statistics (hottest research topic, etc). The bars of the chart are sorted descendingly to make the chart more readable and help the user do more analysis and draw conclusions faster. The x-axis of the bar chart is not labeled with names of the categories as the names in this dataset are too long to display in such a small space. Instead, a tooltip is used to display more information while hovering each bar. The tooltip displays the name of the category, the percentage of papers and also the actual count when hovering over a certain category/bar. Also the color of the selected bar is colored in brown to make it more visible which bar is currently selected. A smaller gray version of the barchart is included below the actual bar chart to perform brushing and zooming on certain areas of the bar chart by drawing a rectangle on the area of interest (click and drag). The area of interest can be redrawn or dragged along the x-axis. This feature is used to zoom in and explore the barchart more and also to display the papers of the brushed/selected area only in the paper display grid. To unbrush the chart, the user can change the tab or double click on the white area of the bar chart (outside the bars).</p> <h5 style='color:orange'> Papers Display Grid </h5> <p>This grid is used to display the filtered and/or brushed papers with each paper added as a card with a big title and authors names. This interface is so much better and informative than having titles listed below each other as any available conference proceeding. Each paper card has a quick view button that opens a quick view popup with all the details about the paper (title, abstract, authors, keywords, topics and groups). The popup window is animated with fade in and fade out when appearing and disappearing respectively. This quick view is better in exploring papers of interest without having to open a new page each time. To exit the quick view, the user can press outside of the popup window. The number of displayed papers is also displayed in the title of the paper display grid to be more informative when the user uses the filtering and/or brushing processes. </p> <p>The combination of the filtering in the search query box and brushing of the bar chart allows the user to filter out papers of interest according to combinations of features. For example, the user can filter out the papers by ‘keyword’ to contain the string ‘bayesian’. The resulting statistics are displayed on the bar chart which can be used by the user to do more filtering by topic or group or authors. The user can for example brush the graph in the topics tab by selecting the first 5 bars of the chart to get the papers in the highest 5 topics that have the word ‘bayesian’ in any of their keywords. This tool can help to speed up the researchers exploration/reading process of previous literature and analysis of conference statistics to form insights about the hottest topics/most active authors/and so on. </p>";
  var w2 = "<h4 style='color:orange'> Development process </h4> <p>I worked on this project alone as I am taking this class as a TQE. The project took around 35 hours of work. At first, a lot of time was spent on choosing which language/technologies to use for the development of this app. Another aspect that took a lot of time (the most) is figuring out how to do interactions between different parts of the visualization tool and fixing the bugs while adding new features.</p>";