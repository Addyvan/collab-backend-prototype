function createSpace(_, args, context, info) {

    var tags = [];

    if (args.space.tags && args.space.tags.length > 0) {
        for (var i = 0; i < args.space.tags.length; i++) {
            tags.push( { name: args.space.tags[i].name } );
        }
    }

    var createSpaceData = {
        name: args.space.name,
        description: args.space.description,
        admin: {
            connect: {
                id: args.space.admin.id
            }
        },
        tags: {connect: tags}
    };

    return context.prisma.mutation.createSpace({
        data: createSpaceData,
        }, info);
}

module.exports = createSpace;