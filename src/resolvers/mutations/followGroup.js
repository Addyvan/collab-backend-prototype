async function followGroup(_, args, context, info) {

    var updateGroupData = {
        followers: {
            connect: {
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

module.exports = followGroup;