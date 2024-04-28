const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const houseSchema = new Schema({
    title: String,
    price: String,
    description : String,
    location: String
});

module.exports = mongoose.model('House',houseSchema);