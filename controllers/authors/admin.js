import Author from '../../models/Author.js';

export const getAuthorsAdmin = async (req, res) => {
  try {
    // Obtener autores activos e inactivos por separado
    const activeAuthors = await Author.find({ active: true });
    const inactiveAuthors = await Author.find({ active: false });

    res.json({ activeAuthors, inactiveAuthors });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los autores' });
  }
};