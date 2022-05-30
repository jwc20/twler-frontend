import ResultDashboard from "../components/ResultDashboard";

function ResultPage() {
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
