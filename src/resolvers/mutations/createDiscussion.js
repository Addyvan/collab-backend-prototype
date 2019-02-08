function createDiscussion(_, args, context, info) {

    var tags = [];

    if (args.discussion.tags && args.discussion.tags.length > 0) {
        for (var i = 0; i < args.discussion.tags.length; i++) {
            tags.push( { name: args.discussion.tags[i].name } );
        }
    }

    var createDiscussionData = {
        author: {
            connect: {
                id: args.discussion.author.id
            }
        },
        group: {
            connect: {
                id: args.discussion.group.id
            }
        },
        title: args.discussion.title,
        body: args.discussion.body,
        tags: { connect: tags }
    };

    return context.prisma.mutation.createDiscussion({
        data: createDiscussionData,
        }, info);

}

module.exports = createDiscussion;