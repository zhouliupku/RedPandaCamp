const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CampgroudSchema = new Schema({
    name: String,
    zoo: String,
    description: String,
    location: String
});

module.exports = mongoose.model('Campground', CampgroudSchema);