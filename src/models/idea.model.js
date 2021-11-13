const { Schema, model } = require("mongoose");
const { USER, COMMENT, IDEA } = require("./types");
const { requiredString, defineSchemaField } = require("./schemasConfig.helper");

const IdeaSchema = new Schema({
  idea: requiredString,
  description: String,
  upvotes: [Boolean],
  downvotes: [Boolean],
  author: defineSchemaField(USER),
  commets: defineSchemaField(COMMENT),
});

IdeaSchema.plugin(require("mongoose-autopopulate"));

module.exports = model(IDEA, IdeaSchema);
