const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    BlogID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "blog",
      required: true,
    },
    Title: {
      type: String,
      required: true,
      trim: true,
    },
    Image: {
      type: String,
      required: true,
      trim: true,
    },
    TopicName: {
      type: String,
      required: true,
      trim: true,
    },
    WriterName: {
      type: String,
      required: true,
      trim: true,
    },
    WriterImage: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const TrendingBlogModel = mongoose.model("trendingblog", DataSchema);

module.exports = TrendingBlogModel;
