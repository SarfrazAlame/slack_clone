"use client";

import { useParams } from "next/navigation";

const WorkspaceIdPage = () => {
  const params = useParams();
  return <div>ID: {params.workspaceId}</div>;
};

export default WorkspaceIdPage;
