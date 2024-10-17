import { usePaginatedQuery } from "convex/react";
import { Id } from "../../../../convex/_generated/dataModel";
import { api } from "../../../../convex/_generated/api";


const BATCH_SIZE = 3;

interface UseGetMessagesProps {
    channelId?: Id<'channels'>,
    conversationId?: Id<"conversations">,
    parentMessageId?: Id<'messages'>
}

export type GetMessagesReturnType = typeof api.messages.get._returnType["page"]

export const useGetMessage = ({
    channelId,
    conversationId,
    parentMessageId
}: UseGetMessagesProps) => {

    if (!channelId && !conversationId && !parentMessageId) {
        return { results: [], status: "empty", loadMore: () => { } };
    }

    const { results, loadMore, status } = usePaginatedQuery(
        api.messages.get,
        { channelId, conversationId, parentMessageId },
        { initialNumItems: BATCH_SIZE }
    )

    return {
        results,
        status,
        loadMore: () => loadMore(BATCH_SIZE)
    }
}
