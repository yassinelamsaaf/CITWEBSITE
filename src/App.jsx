import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cells from "./pages/Cells";
import Events from "./pages/Events";
import Team from "./pages/Team";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cells" element={<Cells />} />
          <Route path="/events" element={<Events />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
