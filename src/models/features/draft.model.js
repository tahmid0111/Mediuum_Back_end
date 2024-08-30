const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    WriterID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'writer',
      required: true,
    },
    Title: {
      type: String,
      required: true,
      trim: true,
      minLength: 10,
      maxLength: 150,
    },
    Content: {
      type: String,
      required: true,
      trim: true,
      maxLength: 10000,
    },
    Conclusion: {
      type: String,
      trim: true,
      maxLength: 200,
    },
    CategoryID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'category',
      required: true,
    },
    TopicID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'topic',
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

const DraftModel = mongoose.model("draft", DataSchema);

module.exports = DraftModel;
