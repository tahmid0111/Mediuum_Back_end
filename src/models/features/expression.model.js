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
    Like: {
      type: Boolean,
      required: true,
      default: false,
    },
    Expression: {
      type: String,
      required: true,
      enum: ['love', 'exciting' , 'sad', 'angry'],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ExpressionModel = mongoose.model("expression", DataSchema);

module.exports = ExpressionModel;
