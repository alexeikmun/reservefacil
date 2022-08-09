const mongoose = require('mongoose');

const citySchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'please add city name']
		},
		country: {
			type: String,
			required: [true, 'Please add a country']
		},
		photoUrl: {
			type: String,
			required: [true, 'Please add a photo']
		}
	},
	{
		timestamps: true
	}
);

module.exports = mongoose.model('City', citySchema);
