async function unlikeDiscussion(_, args, context, info) {

    var updateDiscussionData = {
        likedBy: {
            disconnect: {
                id: args.user.id
            }
        }
    };

    return await context.prisma.mutation.updateDiscussion({
        where: {
            id: args.discussion.id
        },
        data: updateDiscussionData
    });

}

module.exports = unlikeDiscussion;