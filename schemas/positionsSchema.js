const mongoose = require("mongoose"); 
const { Schema } = mongoose;

const positionsSchema = new Schema({
    product: String,
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
    isLoss: { type: Boolean, default: false },
});

const positionsModel = mongoose.model("position", positionsSchema);

module.exports = { positionsModel };  