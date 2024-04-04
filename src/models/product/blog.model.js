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
      maxLength: 70,
    },
    Image: {
      public_id: {
        type: String,
        required: true,
        trim: true,
      },
      url: {
        type: String,
        required: true,
        trim: true,
      },
    },
    Content: {
      type: String,
      required: true,
      trim: true,
      minLength: 500,
      maxLength: 10000,
    },
    Conclusion: {
      type: String,
      required: true,
      trim: true,
      minLength: 50,
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
    timestamps: true,
    versionKey: false,
  }
);

const BlogModel = mongoose.model("blog", DataSchema);

module.exports = BlogModel;
