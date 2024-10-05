"use client";
import React from "react";
import Toolbar from "./Toolbar";
import Sidebar from "./Sidebar";

const WorkspaceLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="h-full ">
      <Toolbar />
      <div className="flex h-[calc(100vh-40px)]">
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default WorkspaceLayout;
