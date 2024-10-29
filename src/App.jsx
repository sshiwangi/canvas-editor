import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import CanvasEditor from "./pages/canvas-editor";
import DashboardEditor from "./pages/dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<DashboardEditor />} />
        <Route path="/editor" element={<CanvasEditor />} />
      </Routes>
    </Router>
  );
}

export default App;
