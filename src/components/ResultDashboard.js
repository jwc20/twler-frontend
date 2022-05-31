import { useEffect, useState } from "react";
import * as d3 from "d3";
import Scatterplot from "../charts/Scatterplot";

const totalAccessor = (d) => d.total;
const snatchAccessor = (d) => d.snatch;
const jerkAccessor = (d) => d.jerk;

const url =
  "http://127.0.0.1:3000/events/years/2021/xxxii-olympic-games/result";

const ResultDashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    d3.json(url).then((data) => {
      setData(data);
      // console.log(data)
      setLoading(false);
    });
    return () => undefined;
  }, []);

  return (
    <div>
      <h2>Result Dashboard</h2>
      {loading && <div>Loading...</div>}
      {!loading && (
        <div className="App__charts">
          <Scatterplot
            data={data}
            xAccessor={snatchAccessor}
            yAccessor={totalAccessor}
            xLabel="Snatch"
            yLabel="Total"
          />
          <Scatterplot
            data={data}
            xAccessor={jerkAccessor}
            yAccessor={totalAccessor}
            xLabel="Clean and Jerk"
            yLabel="Total"
          />
        </div>
      )}
    </div>
  );
};

export default ResultDashboard;
