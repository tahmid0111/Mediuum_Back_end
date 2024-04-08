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
      type: mongoose.Schema.Types.ObjectId,
      ref: "occupation",
      required: true,
    },
    FavourateCategory: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "category",
        required: true,
      },
    ],
    Image: {
      type: String,
      required: true,
    },
    Country: {
      type: String,
      required: true,
      trim: true,
    },
    About: {
      type: String,
      required: true,
      trim: true,
      minLength: 15,
      maxLength: 500,
    },
    Deactivated: {
      type: Boolean,
      required: true,
      default: false,
    },
    WriterProfile: {
      type: Boolean,
      required: true,
      default: false,
    },
    WriterID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "writer",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const UserModel = mongoose.model("user", DataSchema);

module.exports = UserModel;
