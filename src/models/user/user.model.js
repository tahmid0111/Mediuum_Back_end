const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    FirstName: {
      type: String,
      required: true,
      trim: true,
      minLength: 3,
      maxLength: 12,
      match: /^[A-Za-z\s]+$/,
    },
    LastName: {
      type: String,
      required: true,
      trim: true,
      minLength: 3,
      maxLength: 12,
      match: /^[A-Za-z\s]+$/,
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
    Occupation: {
      type: String,
      required: true,
      trim: true,
    },
    FavourateCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Category,
      required: true,
      trim: true,
    },
    Image: {
      type: String,
      required: true,
      trim: true,
    },
    Country: {
      type: String,
      required: true,
      trim: true,
    },
    About: {
      type: String,
      trim: true,
    },
    Deactivated: {
      type: Boolean,
      required: true,
    },
    WriterProfile: {
      type: Boolean,
      required: true,
    },
    WriterID: {
      type: mongoose.Schema.Types.ObjectId,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const UserModel = mongoose.model("users", DataSchema);

module.exports = UserModel;
