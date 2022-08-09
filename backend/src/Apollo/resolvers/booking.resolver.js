const bookingModel = require("../../models/bookingModel");

const resolver = {
  Query: {
    BookingByClient: async (_, args) => {
      const { id } = args;
      const booking = await bookingModel.find({ idClient: id });
      return {
        __typename: "DataResponse",
        success: true,
        data: { booking },
        code: 200,
      };
    },
  },
  Mutation: {
    CreateBooking: async (_, args) => {
      const {
        user,
        startDate,
        endDate,
        idHotel,
        numberOfPeople,
        numberOfRooms,
        total,
      } = args;
      if (!user) {
        return {
          success: false,
          data: { message: "User must be defined" },
          code: 400,
        };
      }
      const newBooking = new bookingModel({
        user,
        startDate,
        endDate,
        idHotel,
        numberOfPeople,
        numberOfRooms,
        total,
      });
      const result = await newBooking.save();
      return returnBooking(result);
    },
  },
};

const returnBooking = (booking) => {
  if (booking) {
    console.log(booking);
    return {
      __typename: "Booking",
      success: true,
      data: {
        user: booking.user,
        startDate: booking.startDate,
        endDate: booking.endDate,
        idHotel: booking.idHotel,
        numberOfPeople: booking.numberOfPeople,
        numberOfRooms: booking.numberOfRooms,
        total: booking.total,
      },
      code: 200,
    };
  }
};

module.exports = { resolver };
