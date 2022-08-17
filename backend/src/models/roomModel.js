const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema(
  {
    numberOfBeds: {
      type: Number,
    },
    price: {
      type: Number,
    },
    idHotel: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hotel",
      required: [true, "Please add a hotel"],
    },
    facilities: {
      type: Array,
    },
    status: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Room", roomSchema);
