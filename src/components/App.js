import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />

          {/*
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
          */}
          {/*
        <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route>
        */}
        </Route>
      </Routes>
      <header className="App-header">
        <h1 className="text-3xl font-bold underline italic">Hello world!</h1>
      </header>
    </div>
  );
}

export default App;
