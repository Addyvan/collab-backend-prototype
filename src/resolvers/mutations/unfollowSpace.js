async function unfollowSpace(_, args, context, info) {

    var updateSpaceData = {
        followers: {
            disconnect: {
                id: args.user.id
            }
        }
    };

    return await context.prisma.mutation.updateSpace({
        where: {
            id: args.space.id
        },
        data: updateSpaceData
    });

}

module.exports = unfollowSpace;