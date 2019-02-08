async function addGroupToSpace(_, args, context, info) {

    var updateSpaceData = {
        groups: {
            connect: {
                id: args.group.id
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

module.exports = addGroupToSpace;