const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    Remark: {
      type: String,
      required: true,
      enum: ["trending", "mostViewed", "latest", "popular"]
    },
    BlogID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const RemarkModel = mongoose.model("remark", DataSchema);

module.exports = RemarkModel;
