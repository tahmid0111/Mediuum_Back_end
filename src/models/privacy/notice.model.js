const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    UserID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    ManagerID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "manager",
      required: true,
    },
    Notice: {
      type: String,
      required: true,
      trim: true,
    },
    Message: {
      type: String,
      required: true,
      trim: true,
      minLength: 50,
      maxLength: 500,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const NoticeModel = mongoose.model("notice", DataSchema);

module.exports = NoticeModel;
