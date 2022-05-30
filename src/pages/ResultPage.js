import { useEffect, useState } from "react";
import ResultDashboard from "../components/ResultDashboard";

function ResultPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getResult() {
      fetch(
        "http://127.0.0.1:3000/events/years/2021/xxxii-olympic-games/result"
      )
        .then((r) => r.json())
        // .then((data) => setData(data));
        .then((data) => console.log(data));
      }

    getResult();
  }, []);

  return (
    <>
      <div className="border-8 border-yellow-300">
        <h1>Result Page</h1>
        <p>Fetch result data for a single event here</p>
        <ResultDashboard />
      </div>
    </>
  );
}

export default ResultPage;
