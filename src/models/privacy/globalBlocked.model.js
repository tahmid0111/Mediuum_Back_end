const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    UserID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const GlobalBlockedModel = mongoose.model("globalBlocked", DataSchema);

module.exports = GlobalBlockedModel;
