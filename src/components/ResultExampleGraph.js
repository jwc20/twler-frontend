import * as d3 from "d3";

function ResultExampleGraph({ data }) {
  // console.log(data)

  const yAccessor = (d) => d["total"];
  // console.log(yAccessor(data[0]))

  const xAccessor = (d) => d["bweight"];
  // console.log(xAccessor(data[0]))

  let dimensions = {
    width: window.innerWidth * 0.9,
    height: 400,
    margins: {
      top: 15,
      bottom: 40,
      right: 15,
      left: 60,
    },
  };

  dimensions.boundWidth =
    dimensions.width - dimensions.margins.left - dimensions.margins.right;
  dimensions.boundHeight =
    dimensions.height - dimensions.margins.top - dimensions.margins.bottom;
  // console.log(dimensions)

  const wrapper = d3
    .select("#wrapper")
    .append("svg")
    .attr("width", dimensions.width)
    .attr("height", dimensions.height);
  // console.log(wrapper)
  // console.log(svg)
  const bounds = wrapper
    .append("g")
    .style(
      "transform",
      `translate(${dimensions.margins.left}px, ${dimensions.margins.top}px)`
    );
  // console.log(bounds)

  const yScale = d3
    .scaleLinear()
    // .domain([0, 100])

    .domain(d3.extent(data, yAccessor))
    .range([dimensions.boundedHeight, 0]);
  // console.log(d3.extent(data, yAccessor));

  const xScale = d3
    .scaleLinear()
    .domain(d3.extent(data, xAccessor))
    .range([0, dimensions.boundWidth]);


  const lineGenerator = d3.line()
  .x(d => xScale(xAccessor(d)))
  .y(d => yScale(yAccessor(d)))

  const line = bounds.append("path")
      .attr("d", lineGenerator(data))


  return (
    <div className="border-2 border-sky-400">
      <h3>Result Example Graph</h3>
      <div className="ResultExampleGraph"></div>

      {/* <ul>
        {data.map((datum, i) => (
          <li key={i}>{datum.name} {datum.total}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default ResultExampleGraph;
