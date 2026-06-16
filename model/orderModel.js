const { model } = require("mongoose");

const {orderSchema} = require("../schemas/orderSchema");


const orderModel = new model("holding", orderSchema);

module.exports = { orderModel }

