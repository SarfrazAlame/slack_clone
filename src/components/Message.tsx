import { format, isToday, isYesterday } from "date-fns";
import { Doc, Id } from "../../convex/_generated/dataModel";

import dynamic from "next/dynamic";
import Hint from "./Hint";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Renderer = dynamic(() => import("@/components/Renderer"), { ssr: false });

interface MessageProps {
  id: Id<"messages">;
  memberId: Id<"members">;
  authorImage?: string;
  authorName?: string;
  isAuthor: boolean;
  reactions: Array<
    Omit<Doc<"reactions">, "memberId"> & {
      count: number;
      memberId: Id<"members">[];
    }
  >;
  body: string;
  image: string | null | undefined;
  createdAt: Doc<"messages">["_creationTime"];
  updatedAt: Doc<"messages">["updateAt"];
  isEditing: boolean;
  isCompact?: boolean;
  setEditingId: (id: Id<"messages"> | null) => void;
  hideThreadButton?: boolean;
  threadCount?: number;
  threadImage?: string;
  threadTimestamp: number;
}

const formatFullTime = (date: Date) => {
  return `${isToday(date) ? "Today, " : isYesterday(date) ? "Yesterday" : format(date, "MMM d, yyyy")} at ${format(date, "h:mm a")}`;
};

export const Message = ({
  id,
  isAuthor,
  memberId,
  authorImage,
  authorName = "Member",
  reactions,
  body,
  image,
  createdAt,
  updatedAt,
  isEditing,
  isCompact,
  setEditingId,
  hideThreadButton,
  threadCount,
  threadImage,
  threadTimestamp,
}: MessageProps) => {
  const avatarFallbackImage = authorName.charAt(0).toUpperCase();
  if (isCompact) {
    return (
      <div className="flex flex-col gap-2 p-1.5 px-5 hover:bg-gray-100/60 group relative">
        <div className="flex items-start gap-2 ">
          <Hint label={formatFullTime(new Date(createdAt))}>
            <button className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 w-[40px] leading-[22px] text-center hover:underline">
              {format(new Date(createdAt), "hh:mm")}
            </button>
          </Hint>
          <div className="flex flex-col w-full">
            <Renderer value={body} />
            {updatedAt ? (
              <span className="text-xs text-muted-foreground">(edited)</span>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-2 p-1.5 px-5 hover:bg-gray-100/60 group relative">
      <div className="flex items-start gap-2">
        <button>
          <Avatar>
            <AvatarImage src={authorImage} />
            <AvatarFallback>
              {avatarFallbackImage}
            </AvatarFallback>
          </Avatar>
        </button>
      </div>
      <div className="flex flex-col w-full overflow-hidden">
        <div className="text-sm">
          <button
            onClick={() => {}}
            className="font-bold text-primary hover:underline"
          >
            {authorName}
          </button>
          <span>&nbsp;&nbsp;</span>
          <button className="text-xs text-muted-foreground hover:underline">
            {formatFullTime(new Date(createdAt))}
          </button>
        </div>
        <Renderer value={body} />
        {updatedAt ? (
          <span className="text-xs text-muted-foreground">(edited)</span>
        ) : null}
      </div>
    </div>
  );
};
