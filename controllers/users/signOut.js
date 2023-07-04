import User from "../../models/User.js";

const signOut = async (req, res) => {
    try {
     let one = await User.findByIdAndUpdate(
        {email:req.user.email},
        {online:false},
        {new:true}
        )
        return res.json({
        success: true,
        message: 'Signout'+one._id+ 'successful',
    
      });
    } catch (error) {
     return next (error)
    }
  };
   export default signOut;