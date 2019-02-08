function group(_, args, context, info) {
    return context.prisma.query.group(
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

module.exports = group;