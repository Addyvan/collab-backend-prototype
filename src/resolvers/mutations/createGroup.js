async function createGroup(_, args, context, info) {

    var createGroupData = {
        name: args.group.name,
        description: args.group.description,
        admin: {
            connect: {
                id: args.group.admin.id
            }
        }
    };

    return context.prisma.mutation.createGroup({
        data: createGroupData,
        }, info);
}

module.exports = createGroup;