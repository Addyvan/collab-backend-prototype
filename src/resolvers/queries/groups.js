function groups(_, args, context, info) {
    return context.prisma.query.groups(
      {
        where:{
          id: args.id        
        },
        skip: args.skip,
        first: args.first,        
      },
      info
    );
}

module.exports = groups;