const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    user: {
      type: Number,
      required: [true, "Please add an user"],
    },
    startDate: {
      type: Date,
      required: [true, "Please add a start date"],
    },
    endDate: {
      type: Date,
      required: [true, "Please add an end date"],
    },
    idHotel: {
      type: Number,
      // ref: "Hotel",
      required: [true, "Please add a hotel"],
    },
    numberOfPeople: {
      type: Number,
      required: [true, "Please add a number of people"],
    },
    numberOfRooms: {
      type: Number,
      required: [true, "Please add a number of rooms"],
    },
    total: {
      taxes: Number,
      subtotal: Number,
      total: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Booking", bookingSchema);
