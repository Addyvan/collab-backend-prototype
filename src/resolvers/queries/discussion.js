function discussion(_, args, context, info) {
    return context.prisma.query.discussion(
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

module.exports = discussion;