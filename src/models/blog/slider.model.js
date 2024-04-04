const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    BlogID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'blog',
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const SliderModel = mongoose.model("slider", DataSchema);

module.exports = SliderModel;
