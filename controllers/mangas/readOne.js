import Manga from "../../models/Manga.js";

async function readOne (res, req, next) {
    try {
        let { id } = req.params
        let one = await Manga.findOne({ _id:id })
        return res.status(200).json({
            succes: true,
            response: one
        })
    } catch (error) {

    }
}

export default readOne