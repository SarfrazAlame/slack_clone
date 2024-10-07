"use client";

import { useGetChannel } from "@/features/channels/api/use-get-channel";
import { useChannelId } from "@/hooks/use-channel-id";
import { Loader, TriangleAlert } from "lucide-react";
import React from "react";

const ChannelIdPage = () => {
  const channelId = useChannelId();

  const { data: channel, isLoading: channelLoading } = useGetChannel({
    workspaceId: channelId,
  });

  if(channelLoading){
    return (
      <div className="h-full flex-1 flex items-center justify-center ">
        <Loader className="animate-spin size-5 text-muted-foreground" />
      </div>
    )
  }

  if(!channel){
    return (
      <div className="h-full flex-1 flex flex-col items-center justify-center ">
        <TriangleAlert className="size-6 text-muted-foreground" />
        <span className="text-sm text-muted-foreground">
          Channel not found
        </span>
      </div>
    )
  }

  return <div>channel</div>;
};

export default ChannelIdPage;