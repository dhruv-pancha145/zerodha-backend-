const { model, Schema } = require("mongoose");

const OrderssSchema = new Schema({
   name: String,
   qty: Number,
   price: Number,
   mode: String,
});

const orderModel = new model("orders", OrderssSchema);

module.exports = { orderModel };