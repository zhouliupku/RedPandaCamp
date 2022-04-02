const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CampgroudSchema = new Schema({
    title: String,
    image: String,
    zoo: String,
    description: String,
    location: String
});

module.exports = mongoose.model('Campground', CampgroudSchema);