import React, { useState, useRef, useEffect } from "react";
import * as d3 from "d3";
import sample from "../db/sample.json";

function ExampleGraph() {
  const [data, setData] = useState(sample);
  const svgRef = useRef();

  useEffect(() => {
    console.log(data)
    const w = 11400;
    const h = 600;
    const svg = d3
      .select(svgRef.current)
      .attr("width", w)
      .attr("height", h)
      .style("background", "#d3d3d3")
      .style("margin-top", "50")
      .style("margin-left", "50")
      .style("overflow", "visible");

    const xScale = d3
      .scaleLinear()
      .domain([0, data.length - 1])
      .range([0, w]);
    const yScale = d3.scaleLinear().domain([0, h]).range([h, 0]);
    const generateScaledLine = d3
      .line()
      .x((d, i) => xScale(i))
      .y(yScale)
      .curve(d3.curveCardinal);

    const xAxis = d3
      .axisBottom(xScale)
      .ticks(data.length)
      .tickFormat((i) => i + 1);
    const yAxis = d3.axisLeft(yScale).ticks(5);
    svg.append("g").call(xAxis).attr("transform", `translate(0, ${h})`);
    svg.append("g").call(yAxis);






  }, [data]);

  return (
    <div>
      <svg ref={svgRef}></svg>
    </div>
  );
}

export default ExampleGraph;
