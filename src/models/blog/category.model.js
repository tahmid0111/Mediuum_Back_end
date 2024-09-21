const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    CategoryName: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { versionKey: false }
);

const CategoryModel = mongoose.model("category", DataSchema);

module.exports = CategoryModel;
