import { useGetWorkspace } from "@/features/wordspaces/api/use-get-workspace";
import { useWorkspaceId } from "@/hooks/use-workspace-id";
import {
  AlertTriangle,
  HashIcon,
  Loader,
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
import { useCreateChannelModel } from "@/features/channels/store/use-create-channels-model";
import { useChannelId } from "@/hooks/use-channel-id";
import { useCurrentMember } from "@/features/members/api/use-current-members";

const WorkspaceSidebar = () => {
  const workspaceId = useWorkspaceId();
  const channelId = useChannelId();

  const [, setOpen] = useCreateChannelModel();

  const { data: member, isLoading: memberIsLoading } = useCurrentMember({
    workspaceId,
  });
  const { data: wordspace, isLoading: workspaceLoading } = useGetWorkspace({
    id: workspaceId,
  });

  const { data: channels,  } = useGetChannels({
    workspaceId,
  });

  const { data: members, } = useGetMembers({
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
      <WorkspaceSection
        label="Channels"
        hint="New channel"
        onNew={member.role === "admin" ? () => setOpen(true) : undefined}
      >
        {channels?.map((item) => (
          <SidebarItem
            key={item._id}
            icon={HashIcon}
            label={item.name}
            id={item._id}
            variant={channelId === item._id ? "active" : "default"}
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
