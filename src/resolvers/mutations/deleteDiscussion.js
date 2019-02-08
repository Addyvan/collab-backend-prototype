async function deleteDiscussion(_, args, context, info) {

    return await context.prisma.mutation.deleteDiscussion({
        where:{
            id: args.id
        }
    });

}

module.exports = deleteDiscussion;