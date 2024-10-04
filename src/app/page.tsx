"use client";
import { useAuthActions } from "@convex-dev/auth/react";
import UserButton from "@/features/auth/components/user-button";

export default function Home() {
  return (
    <div className="h-full">
      Helllo world
      <UserButton />
    </div>
  );
}
