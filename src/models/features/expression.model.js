const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    BlogID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'blog',
      required: true,
    },
    ReaderID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    Expression: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ExpressionModel = mongoose.model("expression", DataSchema);

module.exports = ExpressionModel;
