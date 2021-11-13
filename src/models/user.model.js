const { Schema, model } = require("mongoose");
const { compare, hash, getSalt } = require("bcryptjs");

const { USER } = require("./types");
const { requiredString } = require("./schemasConfig.helper");

const UserSchema = new Schema({
  name: requiredString,
  username: requiredString,
  password: requiredString,
});

UserSchema.methods.toJSON = function () {
  let user = this.object();

  const { password, ...props } = user;

  console.log(props);

  return props;
};

UserSchema.methods.comparePassword = async function (password) {
  return await compare(password, this.password);
};

UserSchema.pre("save", async function (next) {
  const user = this;

  if (!user.isModified("password")) return next();

  const hashedPassword = await hash(user.password, getSalt(10));

  user = {
    ...user,
    password: hashedPassword,
  };

  next();
});

module.exports = model(USER, UserSchema);
