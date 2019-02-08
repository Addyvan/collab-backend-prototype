async function unfollowGroup(_, args, context, info) {

    var updateGroupData = {
        followers: {
            disconnect: {
                id: args.user.id
            }
        }
    };

    return await context.prisma.mutation.updateGroup({
        where: {
            id: args.group.id
        },
        data: updateGroupData
    });

}

module.exports = unfollowGroup;