import ResultExampleGraph from "./ResultExampleGraph";
import { useEffect, useState } from "react";
import * as d3 from "d3";

const totalAccessor = (d) => d.total;
const bweightAccessor = (d) => d.bweight;

const url =
  "http://127.0.0.1:3000/events/years/2021/xxxii-olympic-games/result";

function ResultDashboard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    d3.json(url).then((data) => {
      setData(data);
      setLoading(false);
    });
    return () => undefined;
  }, []);

  return (
    <div className="border-4 border-amber-900	">
      <h2>Result Dashboard</h2>

      {loading && <div>Loading...</div>}
      {!loading && (
        <ResultExampleGraph
          data={data}
          xAccessor={bweightAccessor}
          yAccessor={totalAccessor}
          xLabel="Bodyweight"
          yLabel="Total"
        />
      )}
    </div>
  );
}

export default ResultDashboard;
