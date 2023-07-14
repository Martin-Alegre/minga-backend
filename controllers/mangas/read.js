/* import Manga from "../../models/Manga.js"

export default async (req,res, next) =>{
    console.log(req.query);
    let {title,category_id,order}= req.query
    let queries = {}
    let pagination = {page:1, limit:4}
    let sort = {}

    if ( req.query.page){
        pagination.page = req.query.page
    }
    if(req.query.limit){
        pagination.limit = req.query.limit
    }
    if (title){
            queries.title = {$regex:title, $options:"i"}
    }
    if (category_id){
        queries.category_id= {$in:category_id.split(",")}
    }
    if (order){
        sort.title =order
    }
    try {
       let mangas = await Manga.find(queries)
       .select("-createdAt -updatedAt -__v")
       .sort({title:"asc"})
       .skip(pagination.page > 0 ?(pagination.page-1)*pagination.limit : 0)
       .limit(pagination.limit > 0 ? pagination.limit : 0)
       .populate({
        path:"category_id",
        select: "name"
       })
       res.status(200).json({mangas, success:true})
    } catch (error) {
        return next(error)
}
} */

import Manga from '../../models/Manga.js';

async function read(req, res, next) {
  const { category, title, page } = req.query;
  const perPage = 4;
  const queries = {};
  const sort = { title: 1 }; // Orden ascendente por título

  if (title) {
    queries.title = { $regex: title.trim(), $options: 'i' };
  }

  if (category) {
    queries.category_id = { $in: category.trim().split(',') }; // Ajusta el filtro de categoría según la propiedad del modelo
  }

  try {
    const totalMangas = await Manga.countDocuments(queries);
    const totalPages = Math.ceil(totalMangas / perPage);

    let currentPage = parseInt(page, 10) || 1;
    currentPage = Math.max(1, Math.min(currentPage, totalPages));

    const skip = (currentPage - 1) * perPage;
    const mangas = await Manga.find(queries)
      .select('-createdAt -updatedAt') // Proteger las propiedades createdAt y updatedAt
      .sort(sort)
      .skip(skip)
      .limit(perPage);

    const prevPage = currentPage > 1 ? currentPage - 1 : null;
    const nextPage = currentPage < totalPages ? currentPage + 1 : null;

    const pagination = {};
    if (prevPage !== null) {
      pagination.prev = prevPage;
    }
    if (nextPage !== null) {
      pagination.next = nextPage;
    }

    return res.status(200).json({
      mangas,
      success: true,
      pagination,
    });
  } catch (error) {
    next(error);
  }
}

export default read;