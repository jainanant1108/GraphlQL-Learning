const { USERLIST } = require("../constants");

const resolvers = {
  Query: {
    users() {
      return USERLIST;
    },
  },
};

module.exports = { resolvers };
