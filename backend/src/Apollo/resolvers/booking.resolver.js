const BookingModel = require("../../models/bookingModel");
const Creator = require("../../controllers/Creator");

const resolver = {
  Query: {
    BookingByClient: async (_, args) => {
      const res = new Creator(BookingModel, args);
      return await res.findBy("user");
    },
  },
  Mutation: {
    CreateBooking: async (_, args) => {
      const newArgs = { ...args, bookingStatus: "PENDING", status: "ACTIVE" };
      const res = new Creator(BookingModel, newArgs);
      return await res.create();
    },
    ConfirmBooking: async (_, args) => {
      const res = new Creator(BookingModel, args);
      return await res.update();
    },
  },
};

module.exports = resolver;
