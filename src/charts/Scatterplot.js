import * as d3 from "d3";
import { useRef } from "react";
import Chart from "../charts/Chart";
import Circles from "../charts/Circles";

const Scatterplot = ({ data, xAccessor, yAccessor }) => {
  const width = d3.min([window.innerWidth * 0.9, window.innerHeight * 0.9]);
  const svgRef = useRef();

  let dimensions = {
    width: width,
    height: width,
    margin: {
      top: 10,
      right: 10,
      bottom: 50,
      left: 50,
    },
  };

  dimensions.boundedWidth =
    dimensions.width - dimensions.margin.left - dimensions.margin.right;
  dimensions.boundedHeight =
    dimensions.height - dimensions.margin.top - dimensions.margin.bottom;

  const wrapper = d3
    .select("#wrapper")
    .append("svg")
    .attr("width", dimensions.width)
    .attr("height", dimensions.height);

  const bounds = wrapper
    .append("g")
    .style(
      "transform",
      `translate(${dimensions.margin.left}px, ${dimensions.margin.top}px)`
    );

  const xScale = d3
    .scaleLinear()
    .domain(d3.extent(data, xAccessor))
    .range([0, dimensions.boundedWidth])
    .nice();

  const yScale = d3
    .scaleLinear()
    .domain(d3.extent(data, yAccessor))
    .range([dimensions.boundedHeight, 0])
    .nice();

  const dots = bounds
    .selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", (d) => xScale(xAccessor(d)))
    .attr("cy", (d) => yScale(yAccessor(d)))
    .attr("r", 5);
  console.log(dots);

  // const xAccessorScaled = (d) => xScale(xAccessor(d));
  // const yAccessorScaled = (d) => yScale(yAccessor(d));
  // const y0AccessorScaled = yScale(yScale.domain()[0]);

  return (
    <>
      <svg className="Scatterplot" ref={svgRef}></svg>
      <Chart dimensions={dimensions}>



      </Chart>
      <svg id="wrapper"></svg>
    </>
  );
};

export default Scatterplot;
