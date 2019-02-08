async function likeDiscussion(_, args, context, info) {

    var updateDiscussionData = {
        likedBy: {
            connect: {
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

module.exports = likeDiscussion;