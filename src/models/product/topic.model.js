const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    TopicName: {
      type: String,
      required: true,
      trim: true,
    },
    CategoryID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'category',
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const TopicModel = mongoose.model("topic", DataSchema);

module.exports = TopicModel;
