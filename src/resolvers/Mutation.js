const addGroupToSpace = require("./mutations/addGroupToSpace");
const createDiscussion = require("./mutations/createDiscussion");
const createGroup = require("./mutations/createGroup");
const createReply = require("./mutations/createReply");
const createSpace = require("./mutations/createSpace");
const createTag = require("./mutations/createTag");
const createUser = require("./mutations/createUser");
const deleteDiscussion = require("./mutations/deleteDiscussion");
const deleteGroup = require("./mutations/deleteGroup");
const deleteReply = require("./mutations/deleteReply");
const deleteSpace = require("./mutations/deleteSpace");
const deleteUser = require("./mutations/deleteUser");
const followGroup = require("./mutations/followGroup");
const followSpace = require("./mutations/followSpace");
const followUser = require("./mutations/followUser");
const likeDiscussion = require("./mutations/likeDiscussion");
const unlikeDiscussion = require("./mutations/unlikeDiscussion");
const unfollowGroup = require("./mutations/unfollowGroup");
const unfollowSpace = require("./mutations/unfollowSpace");
const unfollowUser = require("./mutations/unfollowUser");


module.exports = {
    addGroupToSpace,
    createDiscussion,
    createGroup,
    createReply,
    createSpace,
    createTag,
    createUser,
    deleteDiscussion,
    deleteGroup,
    deleteReply,
    deleteSpace,
    deleteUser,
    followGroup,
    followSpace,
    followUser,
    likeDiscussion,
    unlikeDiscussion,
    unfollowGroup,
    unfollowSpace,
    unfollowUser
};