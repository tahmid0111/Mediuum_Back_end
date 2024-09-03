const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    WriterID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "writer",
      required: true,
    },
    Title: {
      type: String,
      required: true,
      trim: true,
      minLength: 10,
      maxLength: 150,
    },
    Image: {
      type: String,
      required: true,
      trim: true,
    },
    Content: {
      type: String,
      required: true,
      trim: true,
      minLength: 100,
      maxLength: 10000,
    },
    // min length = 500, 50
    Conclusion: {
      type: String,
      required: true,
      trim: true,
      minLength: 10,
      maxLength: 200,
    },
    CategoryID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "category",
      required: true,
    },
    TopicID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "topic",
      required: true,
    },
    Saved: {
      type: Boolean,
      default: false,
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const BlogModel = mongoose.model("blog", DataSchema);

module.exports = BlogModel;
