const { gql } = require("apollo-server");

const typeDef = gql`
  type Room {
    id: ID
    numberOfBeds: Int
    price: Int
    idHotel: String
    facilities: [String]
    status: String
    bookingStatus: String
  }
  type Query {
    getPriceOrderedRooms(order: String): [Room]!
    getRoomsByNumberOfBeds(
      numberOfBeds: Int
      startDate: ISODate
      endDate: ISODate
    ): [Room]!
    getRoomsByFacilities(
      facilities: [String]
      startDate: ISODate
      endDate: ISODate
    ): [Room]!
  }

  enum order {
    ASC
    DESC
  }

  type Mutation {
    createRoom(
      numberOfBeds: Int!
      price: Int
      idHotel: String!
      facilities: [String]
    ): Room!
  }
`;

module.exports = { typeDef };
