const mongoose = require("mongoose");

const URL_REGEX =
  /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;

const DEFAULT_VALIDATION = {
  type: String,
  trim: true,
  minLength: 2,
  maxLength: 256,
  lowercase: true,
  required: true,
};

const regexType = (regex, required = true, unique = false) => {
  return {
    type: String,
    required,
    match: RegExp(regex),
    unique,
    trim: true,
  };
};

const imageSchema = new mongoose.Schema({
  url: regexType(URL_REGEX),
  alt: DEFAULT_VALIDATION,
});

const schema = new mongoose.Schema({
  title: DEFAULT_VALIDATION,
  subtitle: DEFAULT_VALIDATION,
  description: {
    type: String,
    trim: true,
    minLength: 2,
    maxLength: 3500,
    lowercase: true,
    required: true,
  },
  missionMode: DEFAULT_VALIDATION,
  dueDate: {
    type: String,
    trim: true,
    minLength: 2,
    maxLength: 1024,
    lowercase: true,
    required: true,
  },
  phone: regexType(/0[0-9]{1,2}\-?\s?[0-9]{3}\s?[0-9]{4}/),
  email: regexType(
    /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
    true,
    true
  ),
  webUrl: regexType(URL_REGEX, false),
  imageUrl: regexType(URL_REGEX),
  imageAlt: DEFAULT_VALIDATION,
  projectNumber: {
    type: Number,
    minLength: 7,
    maxLength: 7,
    required: true,
  },
  likes: [String],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
});

const Project = mongoose.model("project", schema);

module.exports = Project;
