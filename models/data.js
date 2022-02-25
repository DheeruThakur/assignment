const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dataSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  last: {
    type: Number,
    required: true,
  },
  buy: {
    type: Number,
    required: true,
  },
  sell: {
    type: Number,
    required: true,
  },
  volume: {
    type: Number,
    required: true,
  },
  base_unit: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("data", dataSchema);
