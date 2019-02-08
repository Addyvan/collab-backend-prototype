const { gql } = require('apollo-server');

const typeDefs = gql`
type Query {
    users(id: ID): [User]!
    groups(id: ID): [Group]!
    spaces(id: ID): [Space]!
    discussions(id: ID, first: Int, last: Int, orderBy: orderByEnum): [Discussion]!
    user(id: ID, name: String): User
    group(id: ID, name: String): Group
    space(id: ID, name: String): Space
    discussion(id: ID!): Discussion!
}

type Mutation {
    addGroupToSpace(group: GroupInput!, space: SpaceInput!): Space!
    createUser(user: CreateUserInput!): User!
    createGroup(group: CreateGroupInput!): Group!
    createSpace(space: CreateSpaceInput!): Space!
    createDiscussion(discussion: CreateDiscussionInput!): Discussion!
    createReply(reply: CreateReplyInput!): Reply!
    createTag(tag: CreateTagInput!): Tag!
    deleteUser(id: ID!): Boolean!
    deleteGroup(id: ID!): Boolean!
    deleteSpace(id: ID!): Boolean!
    deleteDiscussion(id: ID!): Boolean!
    deleteReply(id: ID!): Boolean!
    followGroup(user: UserInput!, group: GroupInput!): User!
    followSpace(user: UserInput!, space: SpaceInput!): User!
    followUser(userToBeFollowed: UserInput!, userToFollow: UserInput!): User!
    unfollowGroup(user: UserInput!, group: GroupInput!): User!
    unfollowSpace(user: UserInput!, space: SpaceInput!): User!
    unfollowUser(userToBeUnfollowed: UserInput!, userToUnfollow: UserInput!): User!
    likeDiscussion(user: UserInput!, discussion: DiscussionInput!): Discussion!
    unlikeDiscussion(user: UserInput!, discussion: DiscussionInput!): Discussion!
}

type User {
    """User"""
    id: ID!
    createdAt: String!
    updatedAt: String!
    name: String!
    discussions: [Discussion]!
    spaces: [Space]!
    groups: [Group]!
    followers: [User]!
    following: [User]!
    likedDiscussions: [Discussion]!
    sharedDiscussions: [Discussion]!
    savedDiscussions: [Discussion]!
    savedGroups: [Group]!
    savedSpaces: [Space]!
    adminOfGroup: [Group]!
    adminOfSpace: [Space]!
}

type Group {
    """Group"""
    id: ID!
    createdAt: String!
    updatedAt: String!
    name: String!
    description: String!
    admin: User!
    moderators: [User]!
    followers: [User]!
    discussions: [Discussion]!
    spaces: [Space]!
}

type Space {
    """Space"""
    id: ID!
    createdAt: String!
    updatedAt: String!
    admin: User!
    name: String!
    description: String!
    tags: [Tag]!
    groups: [Group]!
    followers: [User]!
}

type Discussion {
    """Discussion"""
    id: ID!
    createdAt: String!
    updatedAt: String!
    author: User!
    group: Group!
    title: String!
    body: String!
    tags: [Tag]!
    replies: [Reply]!
    likedBy: [User]!
    sharedBy: [User]!
}

type Reply {
    """Reply"""
    id: ID!
    createdAt: String!
    updatedAt: String!
    author: User!
    discussion: Discussion!
    body: String!
    parent: Reply
    children: [Reply]
    likedBy: [User]!
}

type Tag {
    """Tag"""
    id: ID!
    createdAt: String!
    name: String!
    spaces: [Space]!
    discussions: [Discussion]!
}


input CreateUserInput {
    name: String!
}

input CreateGroupInput {
    name: String!
    description: String!
    admin: UserInput!
}

input CreateSpaceInput {
    name: String!
    description: String!
    admin: UserInput!
    tags: [TagInput]!
}

input CreateDiscussionInput {
    author: UserInput!
    group: GroupInput!
    title: String!
    body: String!
    tags: [TagInput]
}

input CreateReplyInput {
    author: UserInput!
    discussion: DiscussionInput!
    body: String!
    parent: ReplyInput
    children: [ReplyInput]!
}

input CreateTagInput {
    name: String!
}

input UserInput {
    id: ID
    name: String
}

input GroupInput {
    id: ID
    name: String
}

input SpaceInput {
    id: ID
    name: String
}

input DiscussionInput {
    id: ID
}

input ReplyInput {
    id: ID
}

input TagInput {
    id: ID
    name: String
}

enum orderByEnum {
    createdAt_ASC
    createdAt_DESC
}
`

module.exports = typeDefs;