import { Route, Routes } from "react-router-dom";
import "./App.css";
// import logo from "./logo.png";
import Mockman from "mockman-js";
import Landing from "./Landing";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/landing" element={<Landing/>}/>
        <Route path="/mockman" element={<Mockman/>}/>
      </Routes>
    </div>
  );
}

export default App;
