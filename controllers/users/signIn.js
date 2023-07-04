import User from "../../models/User.js"
import bcrypt from 'bcrypt'

const signIn= async(req,res)=> {
    try {
        const { email, password}= req.body;

        const user= await User.findOne({email});
        if (!user){
            return res.status(401).json({
                success: false,
                message:'email invalid'
            })
        }
        const passwordMatch = await bcrypt.compare(password, user.password)
        if (!passwordMatch){
            return res.status(401).json({
                success: false,
                message: 'credential wrong'
            })
        }
        res.json({
            success: true,
            user
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({ 
            success: false,
            message:'server error'
        })
    }
};


export default signIn
