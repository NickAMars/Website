let width = 500;
let height = 500;

let padding= 20;
let yScale = d3.scaleLinear()
                // minimum is map to the tallest
                .domain(d3.extent(birthData2011, d => d.lifeExpectancy))
                // heights the svg height and 0 is the top of the display
                .range([height - padding, padding]);
let xScale = d3.scaleLinear()
                // lowest fraction to highest fraction
                .domain(d3.extent(birthData2011, d => d.births / d.population))
                .range([padding ,width - padding]);
let colorScale = d3.scaleLinear()
                    .domain(d3.extent(birthData2011, d => d.population/ d.area))
                    .range(['lightgreen','black']);

let radiusScale = d3.scaleLinear()
                      .domain(d3.extent( birthData2011, d => d.births))
                      .range([2,40]);

d3.select("svg")
    .attr("width", width)
    .attr("height", height)
  .selectAll("circle")
  .data(birthData2011)
  .enter()
  .append("circle")
    .attr("fill", d=> colorScale(d.population/d.area))
    .attr("cx", d => xScale(d.births/d.population))
    .attr("cy", d => yScale(d.lifeExpectancy))
    .attr("r", d=> radiusScale(d.births));
