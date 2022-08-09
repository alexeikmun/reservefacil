const resolver = {
  Data: {
    __resolveType(obj) {
      return obj.__typename;
    }
  },
  Auth: {
    password: async (obj) => {
      return '';
    }
  }
};

module.exports = { resolver };
