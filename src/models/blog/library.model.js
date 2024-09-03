const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    BlogID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "blog",
      required: true,
    },
    UserID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const LibraryModel = mongoose.model("library", DataSchema);

module.exports = LibraryModel;
