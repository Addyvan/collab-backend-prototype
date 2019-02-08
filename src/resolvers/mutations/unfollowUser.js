async function unfollowUser(_, args, context, info) {

    var updateUserData = {
        followers: {
            disconnect: {
                id: args.userToUnfollow.id
            }
        }
    };

    return await context.prisma.mutation.updateUser({
        where: {
            id: args.userToBeUnfollowed.id
        },
        data: updateUserData
    });

}

module.exports = unfollowUser;