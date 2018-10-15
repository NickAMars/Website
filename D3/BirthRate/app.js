

let maxBirths = d3.max(birthData, function(d){return d.births;});
// first year come from the first element in my data set
let minYear   = d3.min(birthData, function(d){return d.year;});
// console.log(minYear);
// last year comes from the last year in my data set
let maxYear   = d3.max(birthData, function(d){return d.year;});
// console.log(maxYear);

let width = 600;
let height = 600;
// number of bars that we have
let numBars = 12;
// fit the svg we have
let barPadding = 10;
// width of each individual bar
let barWidth = width/ numBars -barPadding;


//SCALE

let yScale = d3.scaleLinear()
                .domain([0, maxBirths])
                .range([height,0]);
// for the type is equal to range property
d3.select("input")
    .property("min", minYear)
    .property("max", maxYear)
    .property("value",minYear);

d3.select("svg")
    .attr("width", width)
    .attr("height", height)
    .selectAll("rect")
    .data(birthData.filter(function (d){
      return d.year === minYear;
    }))
    .enter()
    // add rect in the svg
    .append("rect")
      // width of one rectangle
      .attr("width", barWidth)
      // height of one rectangle
      .attr("height", function(d){
        return height - yScale(d.births)//d.births / 2.5e6* height;
      })
      // coordinate where rectangel starts
      .attr("y", function(d){
        return yScale(d.births); //height - d.births / 2.5e6 * height;
      })
      // create more rectangle seperated by bar padding
      // d - the data from or data , i - index of that data
      .attr("x", function(d,i){
        // create new starting points for each rectangle
        return ( barWidth + barPadding)* i;
      })
      // change the color to purple
      .attr("fill", "purple");

// listen for input event on the input
      d3.select("input")
      // when you slider moves
      .on("input", function (){
        // +d3.event.target.value can covert this to a Number
        let year  = Number(d3.event.target.value);
        d3.selectAll("rect")
          .data(birthData.filter(function(d){
            return d.year === year;
          }))
          .attr("height", function(d){
            return  height - yScale(d.births);  //d.births/2.5e6* height;
          })
          .attr("y", function(d){
            return  yScale(d.births);//height - d.births/ 2.5e6 * height;
          })
      })
