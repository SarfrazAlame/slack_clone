import { useCurrentMembers } from "@/features/members/api/use-current-members";
import { useGetWorkspace } from "@/features/wordspaces/api/use-get-workspace";
import { useWorkspaceId } from "@/hooks/use-workspace-id";
import {
  AlertTriangle,
  HashIcon,
  Loader,
  MessageSquare,
  MessageSquareText,
  SendHorizonal,
} from "lucide-react";
import React from "react";
import WorkspaceHeader from "./WorkspaceHeader";
import { SidebarItem } from "./SidebarItem";
import { useGetChannels } from "@/features/channels/api/use-get-channels";
import { WorkspaceSection } from "./WorkspaceSection";
import { useGetMembers } from "@/features/members/api/use-get-member";
import { UserItem } from "./user-item";

const WorkspaceSidebar = () => {
  const workspaceId = useWorkspaceId();

  const { data: member, isLoading: memberIsLoading } = useCurrentMembers({
    workspaceId,
  });
  const { data: wordspace, isLoading: workspaceLoading } = useGetWorkspace({
    id: workspaceId,
  });

  const { data: channels, isLoading: channelLoading } = useGetChannels({
    workspaceId,
  });

  const { data: members, isLoading: memberLoading } = useGetMembers({
    workspaceId,
  });

  if (workspaceLoading || memberIsLoading) {
    return (
      <div className="flex flex-col bg-[#5E2C5F] h-full items-center justify-center">
        <Loader className="size-5 animate-spin text-white" />
      </div>
    );
  }

  if (!wordspace || !member) {
    return (
      <div className="flex flex-col gap-y-2 bg-[#5E2C5F] h-full items-center justify-center">
        <AlertTriangle className="size-5 text-white" />
        <p className="text-white text-sm">Workspace not found</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col bg-[#5E2C5F] h-full">
      <WorkspaceHeader
        workspace={wordspace}
        isAdmin={member.role === "admin"}
      />
      <div className="flex flex-col px-2 mt-3">
        <SidebarItem label="Threads" icon={MessageSquareText} id="threads" />
        <SidebarItem label="Drafts & Sent" icon={SendHorizonal} id="drafts" />
      </div>
      <WorkspaceSection label="Channels" hint="New channel" onNew={() => {}}>
        {channels?.map((item) => (
          <SidebarItem
            key={item._id}
            icon={HashIcon}
            label={item.name}
            id={item._id}
          />
        ))}
      </WorkspaceSection>

      <WorkspaceSection
        label="Direct Messages"
        hint="New direct message"
        onNew={() => {}}
      >
        {members?.map((item) => (
          <UserItem
            key={item.userId}
            id={item.userId}
            label={item.user.name}
            image={item.user.image}
          />
        ))}
      </WorkspaceSection>
    </div>
  );
};

export default WorkspaceSidebar;
