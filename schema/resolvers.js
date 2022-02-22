const { USERLIST, MOVIELIST } = require("../constants");
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
    movies: () => {
      return MOVIELIST;
    },
    movie: (parent, args) => {
      const name = args.name;
      const movie = _find(MOVIELIST, { name });
      return movie;
    },
  },

  User: {
    favmovie: () => {
      return _.filter(MOVIELIST, (movie) => movie.id > 2);
    },
  },

  Mutation: {
    createUser: (parent, args) => {
      const user = args.input;
      const lastID = USERLIST[USERLIST.length - 1].id;
      user.id = lastID + 1;
      USERLIST.push(user);
      return user;
    },
  },
};

module.exports = { resolvers };
