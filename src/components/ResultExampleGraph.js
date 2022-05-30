import { useChartDimensions, accessorPropsType } from "../utils/Utils";

function ResultExampleGraph({ data, xAccessor, yAccessor, xLabel, yLabel }) {
  const [ref, dms] = useChartDimensions();
  // console.log(data)
  return (
    <div className="border-2 border-sky-400">
      <h3>Result Example Graph</h3>
      <div className="ResultExampleGraph" ref={ref}></div>
    </div>
  );
}

export default ResultExampleGraph;
