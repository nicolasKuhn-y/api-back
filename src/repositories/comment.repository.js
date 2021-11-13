const BaseRepository = require("./base.repository");
let _comment = null;

class IdeaRepository extends BaseRepository {
  constructor({ CommentModel }) {
    super(CommentModel);
    _comment = CommentModel;
  }

  async getCommentsByAuthor(author) {
    return await _comment.find({ author });
  }
}

module.exports = IdeaRepository;
