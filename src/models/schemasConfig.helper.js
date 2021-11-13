const { Schema } = require("mongoose");

module.exports = {
  requiredString: { type: String, required: true },
  defineSchemaField: (ref) => ({
    type: Schema.Types.ObjectId,
    ref,
    required: true,
    autopopulate: true,
  }),
};
