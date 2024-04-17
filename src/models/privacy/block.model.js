const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    UserID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    ManagerID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "manager",
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const BlockedModel = mongoose.model("block", DataSchema);

module.exports = BlockedModel;
