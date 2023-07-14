import { Router } from "express"
import read from "../controllers/users/read.js"
import register from "../controllers/users/register.js"
import signIn from "../controllers/users/signIn.js"
import signOut from "../controllers/users/signOut.js"
import userSignUp from "../schemas/auth/userSignInSchema.js"
import validator from "../middlerwares/validator.js"
import passport from "../middlerwares/passport.js"
import generateToken from "../middlerwares/generateToken.js"
import accountNotExist from "../middlerwares/accountNotExist.js"
import passwordIsOk from "../middlerwares/passwordIsOk.js"
import accountExists from "../middlerwares/accountExists.js"
import createHash from "../middlerwares/createHash.js"
import userRegister from "../schemas/auth/register.js"
import signInToken from "../controllers/users/signInToken.js"






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

auth_router.post('/register',validator(userRegister),accountExists,createHash, register)
auth_router.post('/signin',validator(userSignUp),accountNotExist,passwordIsOk,generateToken,signIn)
auth_router.post('/signout',passport.authenticate('jwt',{session:false}),signOut)
auth_router.get('/signintoken', passport.authenticate('jwt', {session:false}),signInToken)

export default auth_router