const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    Email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    otp: {
      type: Number,
      required: true,
      default: 0,
    },
    Status: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const OTPModel = mongoose.model("otp", DataSchema);

module.exports = OTPModel;
