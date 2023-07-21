import Category from "../../models/Category.js"
import createHttpError from "http-errors"

export default async(req,res)=> {
    try {
        let categories = await Category.find()       //espero la busqueda de todos los autores
        if (categories.length>0) {                          //que hago si encuentro autores?
            return res.status(200).json({   //envío al cliente una respuesta con los datos que quiera
                categories,
                success:true,
                message:'you have requested GET /api/categories/',
                date: new Date() 
            })
        } else {                            //que hago si NO encuentro autores
            return next(createHttpError(404, ' Not found categories'))
        }
    } catch (error) {                       //que hago si no puedo INTENTAR buscar algo y salta el catch
       next(error)
    }
}