import { Button } from "@/components/ui/button";
import { Id } from "../../../../convex/_generated/dataModel";
import { AlertTriangle, Loader, XIcon } from "lucide-react";
import { useGetMessageReply } from "../api/use-get-message";
import { Message } from "@/components/Message";

interface ThreadProps {
  messageId: Id<"messages">;
  onClose: () => void;
}

export const Thread = ({ messageId, onClose }: ThreadProps) => {
  const { data: message, isLoading: loadingMessage } = useGetMessageReply({
    id: messageId,
  });

  if (loadingMessage) {
    <div className="h-full flex flex-col">
      <div className="flex justify-between items-center p-4 border-b">
        <p className="text-lg font-bold">Thread</p>
        <Button onClick={onClose} size={"iconSm"} variant={"ghost"}>
          <XIcon className="size-5 stroke-[1.5]" />
        </Button>
      </div>
      <div className="flex flex-col gap-y-2 h-full items-center justify-center">
        <Loader className="size-5 animate-spin text-muted-foreground" />
      </div>
    </div>;
  }

  if (!message || message === null) {
    <div className="h-full flex flex-col">
      <div className="flex justify-between items-center p-4 border-b">
        <p className="text-lg font-bold">Thread</p>
        <Button onClick={onClose} size={"iconSm"} variant={"ghost"}>
          <XIcon className="size-5 stroke-[1.5]" />
        </Button>
      </div>
      <div className="flex flex-col gap-y-2 h-full items-center justify-center">
        <AlertTriangle className="size-5 animate-spin text-muted-foreground" />
        <p className="text-sm text-muted-foreground">Message not found</p>
      </div>
    </div>;
  }

  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-between items-center p-4 border-b">
        <p className="text-lg font-bold">Thread</p>
        <Button onClick={onClose} size={"iconSm"} variant={"ghost"}>
          <XIcon className="size-5 stroke-[1.5]" />
        </Button>
      </div>
      <div>
        <Message
          hideThreadButton
          memberId={message?.membserId}
          authorName={message?.user.name}
          authorImage={message?.user.image}
          isAuthor={false}
          body={message?.body}
          image={message?.image}
          createdAt={message?._creationTime}
          updatedAt={message?.updateAt}
          reactions={message?.reactions}
          id={message?._id}
          isEditing={false}
          setEditingId={() => {}}
        />
      </div>
    </div>
  );
};
