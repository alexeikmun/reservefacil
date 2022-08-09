const resolver = {
  Data: {
    __resolveType(obj) {
      console.log(obj);
      if (obj.message) {
        return "Error";
      }
      if (obj.token) {
        return "Auth";
      }
      if (obj.booking) {
        return "DataResponse";
      }
      return "Booking";
    },
  },
  Auth: {
    password: async (obj) => {
      return "";
    },
  },
};

module.exports = { resolver };
