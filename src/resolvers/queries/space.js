function space(_, args, context, info) {
    return context.prisma.query.space(
      {
        where:{
          id: args.id,
          name: args.name,                
        },
        skip: args.skip,
        first: args.first,        
      },
      info
    );
}

module.exports = space;