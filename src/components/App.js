import "./App.css";
import NavBar from './NavBar';
import Routes from './Routes';
import ExampleGraph from './ExampleGraph';

function App() {


  return (
    <div className="App">

      <NavBar />
      <Routes />
      <ExampleGraph />
      <h1 className="text-5xl font-bold underline italic">Hello world!</h1>
    </div>
  );
}

export default App;
