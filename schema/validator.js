const Joi = require('joi');

exports.login = (req) => {
  const schema = Joi.object({
    user_name: Joi.string().required(),
    password: Joi.string().required(),
  });
  return schema.validate(req);
};


exports.formCheckAwb = (req) => {
  const schema = Joi.object({
    courier: Joi.string().required(),
    no_awb: Joi.string().required(),
  });
  return schema.validate(req);
}
