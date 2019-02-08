function createTag(_, args, context, info) {

    var createTagData = {
        name: args.tag.name
    };

    return context.prisma.mutation.createTag({
        data: createTagData,
        }, info);
}

module.exports = createTag;