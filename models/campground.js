const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CampgroudSchema = new Schema({
    title: String,
    zoo: String,
    name: String,
    location: String
});

module.exports = mongoose.model('Campground', CampgroudSchema);