const cityModel = require('../../models/cityModel');
const bcrypt = require('bcryptjs');
const { createToken } = require('../../utils/token');
const resolver = {
	Query: {
		allCities: async (_, args) => {
			const {} = args;
			const city = await cityModel.find();
			return { city };
		},
		allCitiesByCountry: async (_, args) => {
			const { country } = args;
			const countryFound = await cityModel.find({ country });
			return countryFound({ country });
		}
	},
	Mutation: {
		NewCity: async (_, args) => {
			const { name, country, photoUrl } = args;
			const city = await cityModel.findOne({ country });
			if (city) {
				return {
					success: false,
					data: { message: 'city already created' },
					code: 400
				};
			}
			const newCity = new cityModel({
				name,
				country,
				photoUrl
			});
			const result = await newCity.save();
			returnCity({ city: result, validateCountry });
		}
	}
};

module.exports = { resolver };
