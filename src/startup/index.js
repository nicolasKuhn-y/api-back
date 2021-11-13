const express = require("express");

let _express = null,
  _config = null;

class Server {
  constructor({ router, config }) {
    _express = express().use(router);
    _config = config;
  }

  async start() {
    return await _express.listen(_config.PORT, () =>
      console.log(`${_config.APP_NAME} API running on Port ${_config.PORT}`)
    );
  }
}

module.exports = Server;
