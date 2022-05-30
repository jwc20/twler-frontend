import ResultDashboard from "../components/ResultDashboard";
import { useEffect, useState } from "react";
import * as d3 from "d3";

const totalAccessor = (d) => d.total;
const bweightAccessor = (d) => d.bweight;

const url =
  "http://127.0.0.1:3000/events/years/2021/xxxii-olympic-games/result";

function ResultPage() {
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
    <>
      <div className="border-8 border-yellow-300">
        <h1>Result Page</h1>
        <p>Fetch result data for a single event here</p>

        {loading && <div>Loading...</div>}
        {!loading && (
          <ResultDashboard
            data={data}
            xAccessor={bweightAccessor}
            yAccessor={totalAccessor}
            xLabel="Bodyweight"
            yLabel="Total"
          />
        )}
      </div>
    </>
  );
}

export default ResultPage;
