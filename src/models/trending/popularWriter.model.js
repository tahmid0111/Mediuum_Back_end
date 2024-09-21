const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    UserID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    UserName: {
      type: String,
      required: true,
    },
    UserImage: {
      type: String,
      required: true,
    },
    SubTitle: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const PopularWriterModel = mongoose.model("popularwriter", DataSchema);

module.exports = PopularWriterModel;
