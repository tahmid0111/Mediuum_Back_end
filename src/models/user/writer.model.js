const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    UserID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    WriterName: {
      type: String,
      required: true,
      trim: true,
      minLength: 3,
      maxLength: 20,
      match: /^[A-Za-z\s]+$/,
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
    Passion: {
      type: String,
      required: true,
      trim: true,
    },
    About: {
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

const WriterModel = mongoose.model("writer", DataSchema);

module.exports = WriterModel;
