const { Schema, model } = require("mongoose");
const { USER, COMMENT, IDEA } = require("./types");

// const configProps = (ref) => ({
//   type: Schema.Types.ObjectId,
//   ref,
//   required: true,
//   autopopulate: true,
// });

const IdeaSchema = new Schema({
  idea: { type: String, required: true },
  description: String,
  upvotes: [Boolean],
  downvotes: [Boolean],
  author: {
    type: Schema.Types.ObjectId,
    ref: USER,
    required: true,
    autopopulate: true,
  },
  commets: [
    {
      type: Schema.Types.ObjectId,
      ref: COMMENT,
      required: true,
      autopopulate: true,
    },
  ],
});

IdeaSchema.plugin(require("mongoose-autopopulate"));

module.exports = model(IDEA, IdeaSchema);
