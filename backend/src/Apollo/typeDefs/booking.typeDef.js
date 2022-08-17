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
    rooms: [String]
    numberOfPeople: Int
    total: total
  }

  type Query {
    BookingByClient(user: Int): [Booking]
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
      rooms: [String]!
      numberOfPeople: Int!
      total: totalInput
    ): Booking
    ConfirmBooking(id: ID!, bookingStatus: String!): Booking
  }
`;

module.exports = { typeDef };
