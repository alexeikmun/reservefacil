const { gql } = require('apollo-server');

const typeDef = gql`
	type City {
		name: String
		country: String
		photoUrl: String
		id: ID
	}

	type Query {
		allCities: SuccessResponse
		allCitiesByCountry(country: String): SuccessResponse
	}

	type Mutation {
		NewCity(name: String, country: String, photoUrl: String): SuccessResponse
	}
`;
module.exports = { typeDef };
