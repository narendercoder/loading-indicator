import { useEffect, useState } from "react";
import "./App.css";
import ProgressBar from "./Components/ProgressBar";


function App() {
  const [progress, setProgress] = useState(0);
  const [start, setStart] = useState(false);
  const state = {
    size: 250,
    progress,
    strokeWidth: 15,
    circleOneStroke: "#ccc",
    circleTwoStroke: "#9198e5",
  };
  useEffect(() => {
    let initTime = null;
    if (start === true) {
      if (progress >= 0 && progress < 100) {
        initTime = setTimeout(() => setProgress(progress + 1), 20);
      }
    } else {
      clearInterval(initTime);
    }
  }, [progress, start]);
  return (
    <div className="App">
      <div className="loading-indicator">
        <ProgressBar {...state} />
        <div className="btn-group">
          <button className="btn btn-play" onClick={() => setStart(true)}>
            <span>Start</span>
          </button>
          <button className="btn btn-pause" onClick={() => setStart(false)}>
          <span>Pause</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
