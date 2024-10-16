"use client";
import UserButton from "@/features/auth/components/user-button";
import { useCreateWorkspaceModel } from "@/features/wordspaces/store/use-create-workspace-model";
import { useGetWorkspaces } from "@/features/wordspaces/api/use-get-workspaces";
import { useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [open, setOpen] = useCreateWorkspaceModel();
  const router = useRouter();
  const { data, isLoading } = useGetWorkspaces();

  const wordspaceId = useMemo(() => data?.[0]?._id, [data]);

  useEffect(() => {
    if (isLoading) return;

    if (wordspaceId) {
      router.replace(`/workspace/${wordspaceId}`);
    } else if (!open) {
      setOpen(true);
    }
  }, [wordspaceId, isLoading, open, setOpen]);

  return (
    <div className="h-full">
      Helllo world
      <UserButton />
    </div>
  );
}