const users = require("./queries/users");
const user = require("./queries/user");
const groups = require("./queries/groups");
const group = require("./queries/group");
const spaces = require("./queries/spaces");
const space = require("./queries/space");
const discussions = require("./queries/discussions");
const discussion = require("./queries/discussion");

module.exports = {
  users,
  user,
  groups,
  group,
  spaces,
  space,
  discussions,
  discussion
};