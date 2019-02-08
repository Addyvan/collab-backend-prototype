async function deleteReply(_, args, context, info) {

    return await context.prisma.mutation.deleteReply({
        where:{
            id: args.id
        }
    });

}

module.exports = deleteReply;