const Creator = require("./Creator");
const { ApolloError } = require("apollo-server");
const BookingModel = require("../models/bookingModel");

module.exports = class RoomCreator extends Creator {
  constructor(model, data) {
    super(model, data);
  }
  async findAndOrder() {
    const res = await this.model.find().sort({ price: this.data.order });
    this.returnNotFound(res);
    return res;
  }
  async findAvailableRoomBy(attribute, { startDate, endDate }) {
    let allRoomsByAtt = await this.findBy(attribute);
    const bookedRooms = await getBookedRooms(startDate, endDate);
    let idsBookedRooms;
    if (Array.isArray(bookedRooms) && bookedRooms.length > 0) {
      for (let i = 0; i < bookedRooms.length; i++) {
        idsBookedRooms = [...bookedRooms[i].rooms];
      }
      let availableRooms = allRoomsByAtt.filter(
        (room) => !idsBookedRooms.includes(room.id)
      );
      return availableRooms;
    }
    return allRoomsByAtt;
  }
};

async function getBookedRooms(startDate, endDate) {
  return await BookingModel.find({
    rooms: { $exists: true, $size: 1 },
    $or: [{ bookingStatus: "CONFIRMED" }, { bookingStatus: "PENDING" }],
    $or: [
      {
        startDate: {
          $gte: startDate,
        },
        startDate: {
          $lte: endDate,
        },
      },
    ],
    endDate: {
      $lte: endDate,
    },
  });
}
