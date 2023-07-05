import Chapter from "../models/Chapter";

const existsOrderMiddleware = async (req, res, next) => {
  const { manga_id, order } = req.body;

  try {
    const existingChapter = await Chapter.findOne({
      manga_id,
      order,
    });

    if (existingChapter) {
      return res.status(400).json({
        error: "El número de capítulo ya existe",
      });
    }

    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default existsOrderMiddleware;
