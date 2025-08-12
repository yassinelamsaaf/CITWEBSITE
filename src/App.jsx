import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Cells from "./pages/Cells";
import Events from "./pages/Events";
import Team from "./pages/Team";
import LoadingScreen from "./components/LoadingScreen";
import useImagePreloader from "./hooks/useImagePreloader";

function App() {
  const [showLoading, setShowLoading] = useState(true);
  const { progress, isLoading } = useImagePreloader();

  useEffect(() => {
    if (!isLoading) {
      // Add a small delay for smooth transition
      const timer = setTimeout(() => {
        setShowLoading(false);
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (showLoading) {
    return <LoadingScreen progress={progress} />;
  }

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
