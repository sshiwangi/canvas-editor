import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import DesignApproach from "./pages/design-approach";
import HomeLayout from "./components/shared/layout/homeLayout";
import DashboardLayout from "./components/shared/layout/dashboardLayout";
import SignUp from "./pages/signup";
import Login from "./pages/login";
import CanvasEditor from "./components/dashboard/CanvasEditor";
import CanvasArea from "./components/dashboard/CanvasEditor";
import AllTemplates from "./pages/alltemplates";
import TemplatesView from "./components/dashboard/secondary-sidebar";
import TemplateViewer from "./components/shared/components/TemplateViewer";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <HomeLayout>
              <Home />
            </HomeLayout>
          }
        />
        <Route
          path="/dashboard"
          element={
            <DashboardLayout>
              <CanvasArea />
              {/* <CanvasEditor /> */}
            </DashboardLayout>
          }
        />
        <Route
          path="/design-approach"
          element={
            <HomeLayout>
              <DesignApproach />
            </HomeLayout>
          }
        />
        <Route
          path="/all-templates"
          element={
            <HomeLayout>
              <AllTemplates />
            </HomeLayout>
          }
        />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/template-view" element={<TemplateViewer />} />
      </Routes>
    </Router>
  );
}

export default App;
