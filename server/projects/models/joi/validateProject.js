const Joi = require("joi");

const REQUIRED_FIELD = Joi.string().min(2).max(256).required();
const NOT_REQUIRED = Joi.string().min(2).max(256).allow("");
const URL =
  /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;

const message = (regex, message, required = true) => {
  if (required)
    return Joi.string()
      .ruleset.regex(regex)
      .rule({ message: message })
      .required();

  return Joi.string().ruleset.regex(regex).rule({ message: message }).allow("");
};

const validateProject = (project) => {
  const schema = Joi.object({
    title: REQUIRED_FIELD,
    subtitle: REQUIRED_FIELD,
    description: Joi.string().min(2).max(3500).required(),
    phone: message(
      /0[0-9]{1,2}\-?\s?[0-9]{3}\s?[0-9]{4}/,
      'Project "phone" mast be a valid phone number'
    ),
    email: message(
      /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
      'Project "mail" mast be a valid mail'
    ),
    webUrl: message(URL, 'Project "webUrl" mast be a valid url', false),
    imageUrl: message(URL, 'Project "webUrl" mast be a valid url', false),
     imageAlt: NOT_REQUIRED,

    missionMode: REQUIRED_FIELD,
    dueDate:Joi.string().min(2).max(1024).required(),
  });

  return schema.validate(project);
};

module.exports = validateProject;
