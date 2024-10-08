import dynamic from "next/dynamic";
import React from "react";

const Editor = dynamic(() => import("@/components/Editor"), { ssr: false });

const ChatInput = () => {
  return (
    <div className="px-5 w-full">
      <Editor />
    </div>
  );
};

export default ChatInput;
