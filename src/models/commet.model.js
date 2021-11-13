const { Schema, model } = require("mongoose");
const { USER, COMMENT } = require("./types");

const { requiredString, defineSchemaField } = require("./schemasConfig.helper");

const CommentSchema = new Schema({
  commet: requiredString,
  description: String,
  author: defineSchemaField(USER),
});

CommentSchema.plugin(require("mongoose-autopopulate"));

module.exports = model(COMMENT, CommentSchema);
