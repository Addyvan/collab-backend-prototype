async function followSpace(_, args, context, info) {

    var updateSpaceData = {
        followers: {
            connect: {
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

module.exports = followSpace;