const { USERLIST } = require("../constants");
const _ = require("lodash");

const resolvers = {
  Query: {
    users: () => {
      return USERLIST;
    },
    user: (parent, args) => {
      const id = args.id;
      const user = _.find(USERLIST, { id: Number(id) });
      return user;
    },
  },
};

module.exports = { resolvers };
