const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    WriterID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'writer',
      required: true,
    },
    FollowerID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const FollowerModel = mongoose.model("follower", DataSchema);

module.exports = FollowerModel;
