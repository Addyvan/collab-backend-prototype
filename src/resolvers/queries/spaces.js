function spaces(_, args, context, info) {
    return context.prisma.query.spaces(
      {
        where: {
          id: args.id         
        },
        skip: args.skip,
        first: args.first,        
      },
      info
    );
}

module.exports = spaces;