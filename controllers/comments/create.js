import Comment from "../../models/Comment.js"

let create = async (req, res, next) => {
  try {
    const { chapter_id , text } = req.body

    if (!chapter_id) {
      return res.status(400).json({ error: "The chapter_id field is required." });
    }

    const comment = new Comment({
      chapter_id,
      user_id: req.user._id,
      text
    })

    console.log(req.user)

    console.log(comment)

    const { email } = req.user

    await comment.save()

    return res.status(201).json({
      success: "ok",
      message: "new comment from " + email + ": " + "'" + text + "'",
      timestamps: comment.createdAt,
    })
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "server error: " + error.message });
  }
}

export default create;