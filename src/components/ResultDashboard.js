import ResultExampleGraph from "./ResultExampleGraph";
import { useEffect, useState } from "react";
import * as d3 from "d3";

function ResultDashboard({ data, xAccessor, yAccessor, xLabel, yLabel }) {
  // console.log(data)
  return (
    <div className="border-4 border-amber-900	">
      <h2>Result Dashboard</h2>
      <ResultExampleGraph />
    </div>
  );
}

export default ResultDashboard;
