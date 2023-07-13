import Manga from "../../models/Manga.js"

// Controlador para ver un manga específico basado en su ID
export default async (req, res) => {
    
  const mangaId = req.params.id

  try {
    const manga = await Manga.findById(mangaId)

    .select('-_id -author_id -cover_photo -category_id -createdAt -updatedAt -__v')
    
    res.status(200).json({ 
        success: true,
        message: 'Manga found',
        manga: manga
     })
  } 
  catch (error) {
     console.error(error)
     res.status(500).json({ 
        message: 'Manga not found' 
    })
  }
}

