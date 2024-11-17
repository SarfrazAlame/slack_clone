import { Button } from "@/components/ui/button";
import { Id } from "../../../../convex/_generated/dataModel";
import { AlertTriangle, Loader, XIcon } from "lucide-react";
import { Message } from "@/components/Message";
import { useGetMessage } from "../api/use-get-message";
import { useCurrentMember } from "@/features/members/api/use-current-members";
import { useWorkspaceId } from "@/hooks/use-workspace-id";

interface ThreadProps {
  messageId: Id<"messages">;
  onClose: () => void;
}

export const Thread = ({ messageId, onClose }: ThreadProps) => {
  const workspaceId = useWorkspaceId()
  const { data: currentMember } = useCurrentMember({ workspaceId })
  const { data: message, isLoading: loadingMessage } = useGetMessage({
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

  if (!message) {
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
      <div className="h-[49px] flex justify-between items-center px-4 border-b">
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
          isAuthor={message?.membserId === currentMember?._id}
          body={message?.body!}
          image={message?.image}
          createdAt={message?._creationTime!}
          updatedAt={message?.updateAt}
          // @ts-ignore
          reactions={message?.reactions}
          id={message?._id!}
          isEditing={false}
          setEditingId={() => { }}
        />
      </div>
    </div>
  );
};
