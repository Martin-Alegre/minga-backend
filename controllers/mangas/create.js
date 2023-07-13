import Manga from "../../models/Manga.js";
import Joi from "joi";

const createMangaSchema = Joi.object({
  author_id: Joi.string().required().min(3).messages({
    "any.required": "El autor es un campo requerido",
    "string.empty": "El autor no puede estar vacío",
    "string.min": "El autor debe tener al menos 3 caracteres",
  }),
  company_id: Joi.string().required().min(2).messages({
    "any.required": "Company id es un campo requerido",
    "string.empty": "Company id no puede estar vacío",
    "string.min": "Company id debe tener al menos 2 caracteres",
  }),
  title: Joi.string().required().min(5).messages({
    "any.required": "El título es un campo requerido",
    "string.empty": "El título no puede estar vacío",
    "string.min": "El título debe tener al menos 5 caracteres",
  }),
  cover_photo: Joi.string().required().min(10).messages({
    "any.required": "La foto de portada es un campo requerido",
    "string.empty": "La foto de portada no puede estar vacía",
    "string.min": "La foto de portada debe tener al menos 10 caracteres",
  }),
  description: Joi.string().required().min(20).messages({
    "any.required": "La descripción es un campo requerido",
    "string.empty": "La descripción no puede estar vacía",
    "string.min": "La descripción debe tener al menos 20 caracteres",
  }),
  category_id: Joi.string().required().min(3).messages({
    "any.required": "La categoría es un campo requerido",
    "string.empty": "La categoría no puede estar vacía",
    "string.min": "La categoría debe tener al menos 3 caracteres",
  }),
});

const createManga = async (req, res) => {
  try {
    const {
      author_id,
      company_id,
      title,
      cover_photo,
      description,
      category_id,
    } = req.body;

    const { error, value } = createMangaSchema.validate(req.body);

    if (error) {
      const errorMessages = error.details.reduce((messages, err) => {
        const fieldName = err.context.key;
        const errorMessage = err.message;
        messages[fieldName] = errorMessage;
        return messages;
      }, {});

      return res.status(400).json({ error: errorMessages });
    }

    const newManga = new Manga({
      author_id,
      company_id,
      title,
      cover_photo,
      description,
      category_id,
    });

    const createdManga = await newManga.save();

    res.status(201).json({
      response: createdManga,
      success: true,
      message: "User created.",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export default createManga;