async function deleteSpace(_, args, context, info) {

    return await context.prisma.mutation.deleteSpace({
        where:{
            id: args.id
        }
    });

}

module.exports = deleteSpace;