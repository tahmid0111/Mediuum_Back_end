const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
      trim: true,
      default: "admin",
    },
    Email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    Password: {
      type: String,
      required: true,
      trim: true,
    },
    Mobile: {
      type: String,
      required: true,
      trim: true,
    },
    Image: {
      type: String,
      required: true,
      trim: true,
    },
    Role: {
      type: String,
      required: true,
      default: "admin",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const AdminModel = mongoose.model("admin", DataSchema);

module.exports = AdminModel;
