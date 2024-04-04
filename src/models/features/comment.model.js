const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    BlogID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "blog",
      required: true,
    },
    ReaderID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    Comment: {
      type: String,
      required: true,
      trim: true,
      minLength: 2,
      maxLength: 150,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const CommentModel = mongoose.model("comment", DataSchema);

module.exports = CommentModel;
