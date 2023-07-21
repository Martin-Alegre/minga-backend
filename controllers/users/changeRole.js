import User from "../../models/User.js";
import Author from "../../models/Author.js";

export const changeUserRoleToAuthor = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findById(id);
      const author = await Author.findOne({ user_id: id });
  
      if (author.active) {
        user.role = 0; 
        author.active = false;
      } else {
        user.role = 1; 
        author.active = true; 
      }
      await user.save();
      await author.save();
  
      res.json({ message: 'Rol de usuario cambiado correctamente' });
    } catch (error) {
      res.status(500).json({ error: 'Error al cambiar el rol del usuario' });
    }
  };