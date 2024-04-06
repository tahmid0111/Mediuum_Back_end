const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    WriterID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'writer',
      required: true,
    },
    ReaderID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const NoticeModel = mongoose.model("notice", DataSchema);

module.exports = NoticeModel;
