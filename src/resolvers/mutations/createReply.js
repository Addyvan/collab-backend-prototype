function createReply(_, args, context, info) {

    var children = [];

    var createReplyData = {
        author: {
            connect: {
                id: args.reply.author.id
            }
        },
        discussion: {
            connect: {
                id: args.reply.discussion.id
            }
        },
        body: args.discussion.body
    };
    
    if ( args.reply.parent ) {
        createReplyData.parent = {
            connect: { 
                id: args.reply.parent.id
            }
        };
    }

    if ( args.reply.children && args.reply.children.length > 0 ) {
        for (var i = 0; i < args.reply.children.length; i++) {
            children.push( { id: args.reply.children[i].id } );
        }
        createReplyData.children = { connect: children };
    }

    return context.prisma.mutation.createReply({
        data: createReplyData,
        }, info);

}

module.exports = createReply;