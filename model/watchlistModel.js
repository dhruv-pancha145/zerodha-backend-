const { model } = require("mongoose");
const { watchlistSchema } = require("../schemas/watchlistSchema");

const watchlistModel = new model("watchlist", watchlistSchema);

module.exports = { watchlistModel };