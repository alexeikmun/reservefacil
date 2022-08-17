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
    rooms: {
      type: Array,
      required: [true, "Please add rooms"],
    },
    numberOfPeople: {
      type: Number,
      required: [true, "Please add a number of people"],
    },
    bookingStatus: {
      type: String,
      enum: ["CONFIRMED", "PENDING", "CANCELLED"],
      required: true,
    },
    total: {
      taxes: Number,
      subtotal: Number,
      total: Number,
    },
    status: {
      type: String,
      enum: ["ACTIVE", "INACTIVE"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Booking", bookingSchema);
