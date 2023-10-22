import Joi from "joi";

const urlRegex =
  /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;
  const dueDateRegex =/(^0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-(\d{4}$)/

const projectSchema = {
  title: Joi.string().min(2).max(256).required(),
  subtitle: Joi.string().min(2).max(256).required(),
  description: Joi.string().min(2).max(3500).required(),
  phone: Joi.string()
    .ruleset.regex(/0[0-9]{1,2}-?\s?[0-9]{3}\s?[0-9]{4}/)
    .rule({ message: 'project "phone" mast be a valid phone number' })
    .required(),
  email: Joi.string()
    .ruleset.pattern(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/)
    .rule({ message: 'project "mail" mast be a valid mail' })
    .required(),
  webUrl: Joi.string()
    .ruleset.regex(urlRegex)
    .rule({ message: 'project "webUrl" mast be a valid url' })
    .allow(""),
  imageUrl: Joi.string()
    .ruleset.regex(urlRegex)
    .rule({ message: 'project.image "url" mast be a valid url' })
    .allow(""),
  imageAlt: Joi.string().min(2).max(256).allow(""),
  missionMode: Joi.string()
    .min(2)
    .max(256)
    .rule({ message: 'project "missionMode" mast be a valid missionMode' })
    .required(),
  dueDate: Joi.string()
  .ruleset.regex(dueDateRegex)
  .rule({ message: 'project "dueDate" mast be a valid dueDate, 02-02-2024' })
  .required(),
};

export default projectSchema;
