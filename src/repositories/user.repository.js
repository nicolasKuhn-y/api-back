const BaseRepository = require("./base.repository");

let _user = null;

class UserRepository extends BaseRepository {
  constructor({ UserModel }) {
    super(UserModel);
    _user = UserModel;
  }

  async getUserByUsername(username) {
    return await _user.find({ password: username.password });
  }
}

module.exports = UserRepository;
