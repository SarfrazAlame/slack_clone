import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useGetWorkspace } from "@/features/wordspaces/api/use-get-workspace";
import { useGetWorkspaces } from "@/features/wordspaces/api/use-get-workspaces";
import { useCreateWorkspaceModel } from "@/features/wordspaces/store/use-create-workspace-model";
import { useWorkspaceId } from "@/hooks/use-workspace-id";
import { DropdownMenuContent } from "@radix-ui/react-dropdown-menu";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const WorkspaceSwicher = () => {
  const router = useRouter();
  const workspaceId = useWorkspaceId();
  const [_open, setOpen] = useCreateWorkspaceModel();

  const { data: workspaces, isLoading: workspacesIsLoading } =
    useGetWorkspaces();
  const { data: workspace, isLoading: workspaceIsLoading } = useGetWorkspace({
    id: workspaceId,
  });

  const filteredWorkspaces = workspaces?.filter(
    (workspace) => workspace._id !== workspaceId
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button className="size-9 relative overflow-hidden bg-[#ABABAD] hover:bg-[#ABABAD]/80 text-slate-800 font-semibold text-xl">
          {workspaceIsLoading ? (
            <Loader className="size-5 animate-spin shrink-0" />
          ) : (
            workspace?.name.charAt(0).toUpperCase()
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="bottom" align="start" className="w-60">
        <DropdownMenuItem
          onClick={() => router.push(`/workspace/${workspaceId}`)}
          className="cursor-pointer bg-gray-100 hover:bg-gray-200 flex-col justify-start items-start capitalize"
        >
          {workspace?.name}
          <span className="text-xs text-muted-foreground">
            Active workspace
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default WorkspaceSwicher;
