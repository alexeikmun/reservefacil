const { gql } = require("apollo-server");

const typeDef = gql`
  type SuccessResponse {
    success: Boolean!
    data: Data!
    code: Int!
  }

  union Data = Auth | Error | Booking

  type Error {
    message: String!
  }
`;

module.exports = { typeDef };
