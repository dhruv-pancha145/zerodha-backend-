const {  model } = require("mongoose");

const { postionsSchema } = require("../schemas/positionsSchema");

const positionsModel = new model("position", postionsSchema);

module.exports = { positionsModel };