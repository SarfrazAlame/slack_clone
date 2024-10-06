import React from "react";

interface WorkspaceSectionProps {
  children: React.ReactNode;
  lable: string;
  hint: string;
  onNew?: () => void;
}

export const WorkspaceSection = ({ children }: WorkspaceSectionProps) => {
  return <div className="flex flex-col mt-3 px-2">{children}</div>;
};
