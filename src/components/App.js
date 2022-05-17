import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Nav from "./Nav";
import Results from "../pages/Results";
import Athletes from "../pages/Athletes";
import Login from "./Login";
import Signup from "../pages/Signup";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
          <Route index element={<Home />} />
          <Route path="results" element={<Results />} />
          <Route path="athletes" element={<Athletes />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
