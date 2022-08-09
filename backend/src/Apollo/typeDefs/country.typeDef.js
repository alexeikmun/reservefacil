const { gql } = require('apollo-server');

const typeDef = gql`
  type Country {
    name: String!
    abbreviation: String!
    flagImage: String!
  }

  type Query {
    getCountry(abbreviation: String): SuccessResponse
    getAllCountries: SuccessResponse
  }

  type Mutation {
    RegisterCountry(
      name: String!
      abbreviation: String!
      flagImage: String!
    ): SuccessResponse
  }
`;

module.exports = { typeDef };
