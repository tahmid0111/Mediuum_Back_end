const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    ReporterID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "writer",
      required: true,
    },
    ReportedReaderID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    Report: {
      type: String,
      required: true,
      trim: true,
      minLength: 10,
      maxLength: 70,
    },
    ReportDetails: {
      type: String,
      required: true,
      trim: true,
      minLength: 100,
      maxLength: 1000,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ReportByWriterModel = mongoose.model("reportByWriter", DataSchema);

module.exports = ReportByWriterModel;
