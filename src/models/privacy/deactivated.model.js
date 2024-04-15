const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    Email: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const DeactivatedModel = mongoose.model("deactivated", DataSchema);

module.exports = DeactivatedModel;
