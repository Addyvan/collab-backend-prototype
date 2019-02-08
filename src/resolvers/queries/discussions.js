function discussions(_, args, context, info) {
    return context.prisma.query.discussions(
      {
        where:{
          id: args.id            
        },
        skip: args.skip,
        first: args.first    
      },
      info
    );
}

module.exports = discussions;