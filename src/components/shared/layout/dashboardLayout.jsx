import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import WorkspaceHeader from "../components/WorkspaceHeader";
import { motion, AnimatePresence } from "framer-motion";
import TemplatesView from "../../dashboard/secondary-sidebar";


function DashboardLayout({ children, header }) {

   const [activePanel, setActivePanel] = useState(null);

   const handleIconClick = (panelName) => {
     setActivePanel(activePanel === panelName ? null : panelName);
   };
  return (
    <div className="flex">
      <Sidebar activePanel={activePanel} onIconClick={handleIconClick} />
      <AnimatePresence>
        {activePanel && <TemplatesView onClose={() => setActivePanel(null)} />}
      </AnimatePresence>
      <div className="flex-1">
        <WorkspaceHeader />
        <main>{children}</main>
      </div>
    </div>
  );
}

export default DashboardLayout;
