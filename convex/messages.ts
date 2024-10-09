import { v } from "convex/values";
import { mutation, QueryCtx } from "./_generated/server";
import { auth } from "./auth";
import { Id } from "./_generated/dataModel";

const getMember = async (ctx: QueryCtx, workspaceId: Id<'workspaces'>, userId: Id<'users'>) => {
    return ctx.db.query("members").withIndex("by_worksapce_id_user_id", (q) => q.eq('workspaceId', workspaceId).eq('userId', userId)).unique()
}

export const create = mutation({
    args: {
        body: v.string(),
        image: v.optional(v.id("_storage")),
        parentMessageId: v.optional(v.id("messages")),
        workspaceId: v.id("workspaces"),
        channelId: v.optional(v.id("channels")),
        // TODO: add conversationId here
    },
    handler: async (ctx, args) => {
        const userId = await auth.getUserId(ctx)

        if (!userId) {
            throw new Error("Unauthorized")
        }

        const member = await getMember(ctx, args.workspaceId, userId)

        if (!member) {
            throw new Error("Unauthorized")
        }

        // handle conversationId

        const messageId = await ctx.db.insert('messages', {
            membserId: member._id,
            body: args.body,
            image: args.image,
            parentMessageId: args.parentMessageId,
            workspaceId: args.workspaceId,
            channelId: args.channelId,
            updateAt: Date.now()
        })

        return messageId
    }
})

