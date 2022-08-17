const RoomModel = require("../../models/roomModel");
const RoomCreator = require("../../controllers/roomController");

const resolver = {
  Query: {
    getPriceOrderedRooms: async (_, args) => {
      const res = new RoomCreator(RoomModel, { order: args.order });
      return await res.findAndOrder();
    },
    getRoomsByNumberOfBeds: async (_, args) => {
      const res = new RoomCreator(RoomModel, {
        numberOfBeds: args.numberOfBeds,
      });
      return await res.findAvailableRoomBy("numberOfBeds", {
        startDate: args.startDate,
        endDate: args.endDate,
      });
    },
    getRoomsByFacilities: async (_, args) => {
      const rooms = new RoomCreator(RoomModel, {
        facilities: args.facilities,
      });
      return await rooms.findAvailableRoomBy("facilities", {
        startDate: args.startDate,
        endDate: args.endDate,
      });
    },
  },
  Mutation: {
    createRoom: async (_, args) => {
      const newArgs = { ...args, status: "ACTIVE", bookingStatus: "AVAILABLE" };
      const Room = new RoomCreator(RoomModel, newArgs);
      return await Room.create();
    },
  },
};

module.exports = resolver;
