const Joi = require('joi');

exports.login = (req) => {
  const schema = Joi.object({
    user_name: Joi.string().required(),
    password: Joi.string().required(),
  });
  return schema.validate(req);
};

