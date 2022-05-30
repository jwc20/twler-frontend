import ResultExampleGraph from "./ResultExampleGraph";
import { useEffect, useState } from "react";
import * as d3 from "d3";

function ResultDashboard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   async function getResult() {
  //     const response = await fetch(
  //       "http://127.0.0.1:3000/events/years/2021/xxxii-olympic-games/result"
  //     )
  //       const data = await response.json()
  //       // .then((r) => r.json())
  //       // .then((data) => setData(data));
  //       console.log(data)
  //     // .then((data) => console.log(data));
  //   }

  //   getResult();
  // }, []);

  useEffect(() => {
    d3.json(
      "http://127.0.0.1:3000/events/years/2021/xxxii-olympic-games/result"
    ).then((data) => {
      setData(data);
      setLoading(false);
    });
    return () => undefined;
  }, []);

  return (
    <div className="border-4 border-amber-900	">
      <h2>Result Dashboard</h2>
      {loading && <div>loading</div>}
      {!loading && <ResultExampleGraph data={data} />}
    </div>
  );
}

export default ResultDashboard;
