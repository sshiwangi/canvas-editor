import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import CanvasEditor from "./pages/template-edit";
import DesignApproach from "./pages/design-approach"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<CanvasEditor />} />
        <Route path="/design-approach" element={<DesignApproach/>} />
        {/* <Route path="/editor" element={<CanvasEditor />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
