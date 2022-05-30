import PropTypes from "prop-types";
import * as d3 from "d3";
import Chart from "../charts/Chart";
import Line from "../charts/Chart";

// import Chart from "./Chart/Chart"

// import Axis from "./Chart/Axis-naive"

import { useChartDimensions, accessorPropsType } from "../utils/Utils";

const TotalsAndBodyweight = ({ data, xAccessor, yAccessor, label }) => {
  const [ref, dimensions] = useChartDimensions();

  const xScale = d3
    .scaleTime()
    .domain(d3.extent(data, xAccessor))
    .range([0, dimensions.boundedWidth]);

  const yScale = d3
    .scaleLinear()
    .domain(d3.extent(data, yAccessor))
    .range([dimensions.boundedHeight, 0])
    .nice();

  const xAccessorScaled = (d) => xScale(xAccessor(d));
  const yAccessorScaled = (d) => yScale(yAccessor(d));
  const y0AccessorScaled = yScale(yScale.domain()[0]);

  return (
    <div className="TotalsAndBodyweight" ref={ref}>
      <h3>Totals and BW</h3>
      <Chart dimensions={dimensions}>
        <Line
          data={data}
          xAccessor={xAccessorScaled}
          yAccessor={yAccessorScaled}
        />
      </Chart>
    </div>
  );
};

TotalsAndBodyweight.propTypes = {
  // data: PropTypes.array,
  xAccessor: accessorPropsType,
  yAccessor: accessorPropsType,
  label: PropTypes.string,
};

TotalsAndBodyweight.defaultProps = {
  xAccessor: (d) => d.x,
  yAccessor: (d) => d.y,
};

export default TotalsAndBodyweight;
