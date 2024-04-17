const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
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

const GlobalNoticeModel = mongoose.model("globalNotice", DataSchema);

module.exports = GlobalNoticeModel;
