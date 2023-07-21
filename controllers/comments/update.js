import Comment from "../../models/Comment.js"

const update = async (req, res, next) => {

    try {
        const commentId = req.params.id
        const { text } = req.body
        const token = req.headers.authorization.split(' ')[1]

        console.log(token)

        const comment = await Comment.findById(commentId)

        if (!comment) {
            // El comentario no existe
            return next(createHttpError(404, 'Comment not found'));
          }

        comment.text = text;
        await comment.save()

        return res.status(200).json({
            success: true,
            message: "Comment updated successfully",
            comment: comment,
          })
    }
    catch(error){
        next(error)
    }
}

export default update