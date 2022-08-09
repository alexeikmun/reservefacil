const { gql } = require("apollo-server");

const typeDef = gql`
  scalar ISODate

  type total {
    taxes: Int
    subtotal: Int
    total: Int
  }
  type Booking {
    user: Int
    startDate: ISODate
    endDate: ISODate
    idHotel: Int
    numberOfPeople: Int
    numberOfRooms: Int
    total: total
  }

  type Query {
    BookingByClient(id: Int): SuccessResponse
  }
  input totalInput {
    taxes: Int
    subtotal: Int
    total: Int
  }
  type Mutation {
    CreateBooking(
      user: Int!
      startDate: ISODate!
      endDate: ISODate!
      idHotel: Int!
      numberOfPeople: Int!
      numberOfRooms: Int!
      total: totalInput
    ): SuccessResponse
  }
`;

module.exports = { typeDef };
