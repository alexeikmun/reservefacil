const mongoose = require('mongoose');

const countrySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name']
    },
    abbreviation: {
      type: String,
      required: [true, 'Please add an abbreviation'],
      unique: true
    },
    flagImage: {
      type: String,
      required: [true, 'Please add a flag'],
      unique: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Country', countrySchema);
