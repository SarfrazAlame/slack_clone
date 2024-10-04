'use client'
import { AuthScreen } from "@/features/auth/components/auth-screen";
import { SignInFlow } from "@/features/auth/types";
import { useState } from "react";
import { useAuthActions } from "@convex-dev/auth/react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { signOut } = useAuthActions();
  return (
    <div className="h-full">
      Helllo world
      <Button onClick={signOut}>Sign out</Button>
    </div>
  );
}
