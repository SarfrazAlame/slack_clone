"use client";

import { useGetChannel } from "@/features/channels/api/use-get-channel";
import { useChannelId } from "@/hooks/use-channel-id";
import { Loader, TriangleAlert } from "lucide-react";
import React from "react";
import { Header } from "./Header";
import ChatInput from "./ChatInput";
import { useGetMessage } from "@/features/messages/api/use-get-messages";

const ChannelIdPage = () => {
  const channelId = useChannelId();

  const { results } = useGetMessage({ channelId });

  console.log(results);

  const { data: channel, isLoading: channelLoading } = useGetChannel({
    workspaceId: channelId,
  });

  if (channelLoading) {
    return (
      <div className="h-full flex-1 flex items-center justify-center ">
        <Loader className="animate-spin size-5 text-muted-foreground" />
      </div>
    );
  }

  if (!channel) {
    return (
      <div className="h-full flex-1 flex flex-col items-center justify-center ">
        <TriangleAlert className="size-6 text-muted-foreground" />
        <span className="text-sm text-muted-foreground">Channel not found</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <Header title={channel.name} />
      <div className="flex-1" />
      {JSON.stringify(results)}
      <ChatInput placeholder={`Message # ${channel.name}`} />
    </div>
  );
};

export default ChannelIdPage;
