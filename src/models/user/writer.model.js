const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    UserID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
      unique: true,
    },
    WriterName: {
      type: String,
      required: true,
      trim: true,
      minLength: 3,
      maxLength: 20,
      match: /^[A-Za-z\s]+$/,
    },
    Image: {
      type: String,
      required: true,
    },
    // Passion: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "passion",
    //   required: true,
    // },
    About: {
      type: String,
      required: true,
      trim: true,
      minLength: 50,
      maxLength: 500,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const WriterModel = mongoose.model("writer", DataSchema);

module.exports = WriterModel;
