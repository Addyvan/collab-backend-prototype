async function deleteGroup(_, args, context, info) {

    return await context.prisma.mutation.deleteGroup({
        where:{
            id: args.id
        }
    });

}

module.exports = deleteGroup;