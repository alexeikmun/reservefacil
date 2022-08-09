const countryModel = require('../../models/countryModel');
const bcrypt = require('bcryptjs');

const resolver = {
  Query: {
    getCountry: async (_, args) => {
      const { abbreviation } = args;
      const country = await countryModel.findOne({ abbreviation });
      return returnCountry({ country });
    },
    getAllCountries: async () => {
      const countries = await countryModel.find();
      return returnCountry({ countries });
    }
  },
  Mutation: {
    RegisterCountry: async (_, args) => {
      const { name, abbreviation, flagImage } = args;
      const country = await countryModel.findOne({ abbreviation });

      if (country) {
        return {
          success: false,
          data: { message: 'Country already exists' },
          code: 400
        };
      }
      const newCountry = new countryModel({
        name,
        abbreviation,
        flagImage
      });
      const result = await newCountry.save();
      returnCountry({ country: result });
    }
  }
};

const returnCountry = async ({ country }) => {
  if (country) {
    return {
      success: true,
      data: {
        __typename: 'Country',
        name: country.name,
        abbreviation: country.abbreviation,
        flagImage: country.flagImage
      },
      code: 200
    };
  } else {
    return {
      __typename: 'Error',
      success: false,
      data: { message: 'Invalid country' },
      code: 401
    };
  }
};

module.exports = { resolver };
