import { Router } from "express"
import read from "../controllers/users/read.js"

import signIn from "../controllers/users/signIn.js"
import signOut from "../controllers/users/signOut.js"
import userSignIn from "../schemas/auth/userSignInSchema.js"
import validator from "../middlerwares/validator.js"
import passport from "../middlerwares/passport.js"
import generateToken from "../middlerwares/generateToken.js"
import accountNotExist from "../middlerwares/accountNotExist.js"
import passwordIsOk from "../middlerwares/passwordIsOk.js"




const auth_router = Router()

auth_router.get('/',read)
auth_router.post('/signin',validator(userSignIn),accountNotExist,passwordIsOk,generateToken,signIn)
auth_router.post('/signout',passport.authenticate('jwt',{session:false}),signOut)

export default auth_router