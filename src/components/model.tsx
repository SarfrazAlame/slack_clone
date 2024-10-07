"use client";

import { CreateChannelModel } from "@/features/channels/components/create-channel-model";
import { CreateWorkspaceModel } from "@/features/wordspaces/components/create-workspace-model";
import { useEffect, useState } from "react";

export const Models = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <CreateWorkspaceModel />
      <CreateChannelModel />
    </>
  );
};
