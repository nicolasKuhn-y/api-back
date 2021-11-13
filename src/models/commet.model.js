const { Schema, model } = require("mongoose");
const { USER, COMMENT } = require("./types");

const CommentSchema = new Schema({
  commet: { type: String, required: true },
  description: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: USER,
    required: true,
    autopopulate: true,
  },
});

CommentSchema.plugin(require("mongoose-autopopulate"));

module.exports = model(COMMENT, CommentSchema);
