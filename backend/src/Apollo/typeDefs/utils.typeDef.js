const { gql } = require('apollo-server');

const typeDef = gql`
  type SuccessResponse {
    success: Boolean!
    data: Data!
    code: Int!
  }

  union Data = Auth | Error | Country

  type Error {
    message: String!
  }
`;

module.exports = { typeDef };
