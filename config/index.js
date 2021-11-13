if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const { PORT, MONGO_URI, APP_NAME } = process.env;

module.exports = {
  PORT,
  MONGO_URI,
  APP_NAME,
};
