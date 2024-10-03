import { AuthScreen } from "@/features/auth/components/auth-screen";
import { SignInFlow } from "@/features/auth/types";
import { useState } from "react";

export default function Home() {

  return (
    <div className="h-full">
      <AuthScreen />
    </div>
  );
}
