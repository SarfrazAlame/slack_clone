"use client";

import { useGetWorkspace } from "@/features/wordspaces/api/use-get-workspace";
import { useWorkspaceId } from "@/hooks/use-workspace-id";
import { useParams } from "next/navigation";

const WorkspaceIdPage = () => {
  const workspaceId = useWorkspaceId();
  const { data, isLoading } = useGetWorkspace({ id: workspaceId });

  return <div> 
    Data: {JSON.stringify(data)}
  </div>;
};

export default WorkspaceIdPage;
