import PropTypes from "prop-types";
import * as d3 from "d3";

import Scatterplot from "../charts/Scatterplot";
// import Line from "../charts/Chart";

// import Chart from "./Chart/Chart"

// import Axis from "./Chart/Axis-naive"

import { useChartDimensions, accessorPropsType } from "../utils/Utils";

const ResultTotals = ({ data, xAccessor, yAccessor, xLabel, yLabel }) => {
  // const [ref, dimensions] = useChartDimensions();

  // console.log(xAccessor, yAccessor, xLabel, yLabel)

  // const xScale = d3
  //   .scaleTime()
  //   .domain(d3.extent(data, xAccessor))
  //   .range([0, dimensions.boundedWidth]);

  // const yScale = d3
  //   .scaleLinear()
  //   .domain(d3.extent(data, yAccessor))
  //   .range([dimensions.boundedHeight, 0])
  //   .nice();

  // const xAccessorScaled = (d) => xScale(xAccessor(d));
  // const yAccessorScaled = (d) => yScale(yAccessor(d));
  // const y0AccessorScaled = yScale(yScale.domain()[0]);

  return (
    <div className="ResultTotals">
      <h3>Totals and BW</h3>
      <Scatterplot data={data} xAccessor={xAccessor} yAccessor={yAccessor} />

      {/* <Chart dimensions={dimensions}>
        <Line
          data={data}
          xAccessor={xAccessorScaled}
          yAccessor={yAccessorScaled}
        />
      </Chart> */}
    </div>
  );
};

// ResultTotals.propTypes = {
//   // data: PropTypes.array,
//   xAccessor: accessorPropsType,
//   yAccessor: accessorPropsType,
//   label: PropTypes.string,
// };

// ResultTotals.defaultProps = {
//   xAccessor: (d) => d.x,
//   yAccessor: (d) => d.y,
// };

export default ResultTotals;
