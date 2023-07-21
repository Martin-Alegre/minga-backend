import createHttpError from 'http-errors';
import Comment from "../../models/Comment.js"

const destroy = async (req, res, next) => {
  try {
    const commentId = req.params.id;
    const token = req.headers.authorization.split(' ')[1];

    console.log(token);

    const comment = await Comment.findById({_id: commentId})

    if (!comment) {
      return next(createHttpError(404, 'Comment not found'));
    }

    await Comment.deleteOne({ _id: commentId })

      return res.status(200).json({
        success: true,
        message: "Comment deleted successfully",
      });
    }
    catch (error) {
    next(error);
    }
};

export default destroy;