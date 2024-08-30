const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    TopicName: {
      type: String,
      required: true,
      trim: true,
    },
    CategoryID: {
      // type: mongoose.Schema.Types.ObjectId,
      type: String,
      ref: 'category',
      required: true,
    },
  }
);

const TopicModel = mongoose.model("topic", DataSchema);

module.exports = TopicModel;
