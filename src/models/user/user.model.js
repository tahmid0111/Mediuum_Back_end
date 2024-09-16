const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    FullName: {
      type: String,
      required: true,
      trim: true,
      minLength: 8,
      maxLength: 30,
      match: /^[A-Za-z\s]+$/,
    },
    SubTitle: {
      type: String,
      trim: true,
      maxLength: 100,
    },
    Email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    Password: {
      type: String,
      required: true,
      trim: true,
    },
    Occupation: {
      type: String,
      required: true,
      enum: [
        "Software Engineer",
        "Doctor",
        "Data Analyst",
        "Marketing Specialist",
        "Civil Engineer",
        "Financial Analyst",
        "Human Resources Manager",
        "Student",
        "others",
      ],
      trim: true,
    },
    Image: {
      type: String,
      required: true,
    },
    About: {
      type: String,
      required: true,
      trim: true,
      minLength: 15,
      maxLength: 500,
    },
    Deactivated: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const UserModel = mongoose.model("user", DataSchema);

module.exports = UserModel;
