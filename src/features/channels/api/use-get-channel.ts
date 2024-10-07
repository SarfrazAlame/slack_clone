import { useQuery } from "convex/react"
import { api } from "../../../../convex/_generated/api"
import { Id } from "../../../../convex/_generated/dataModel"

interface useGetChannelProps {
    workspaceId: Id<"channels">
}

export const useGetChannel = ({ workspaceId }: useGetChannelProps) => {
    const data = useQuery(api.channels.getById, { id: workspaceId })
    const isLoading = data === undefined

    return { data, isLoading }
}
