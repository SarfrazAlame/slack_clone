"use client";

import React from "react";
import { FaSlackHash } from "react-icons/fa";
import VerificationInput from "react-verification-input";

const JoinPage = () => {
  return (
    <div className="h-full flex flex-col gap-y-8 items-center justify-center bg-white p-8 rounded-lg shadow-md">
      <FaSlackHash className="text-rose-600" size={100} />
      <div className="flex flex-col gap-y-4 items-center justify-center max-w-md">
        <div className="flex flex-col gap-y-2 items-center justify-center">
          <h1 className="text-2xl font-bold">Join a workspace</h1>
          <p className="text-md text-muted-foreground">
            Enter the workspace code to join
          </p>
        </div>
        <VerificationInput
          classNames={{
            container: "flex gap-x-2",
            character:
              "uppercase h-auto rounded-md border border-gray-300 flex items-center justify-center text-lg font-medium",
          }}
        />
      </div>
    </div>
  );
};

export default JoinPage;
