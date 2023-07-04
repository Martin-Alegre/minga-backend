import { Router } from "express"
import read from "../controllers/users/read.js"

import signIn from "../controllers/users/signIn.js"

import userSignIn from "../schemas/auth/userSignInSchema.js"
import validator from "../middlerwares/validator.js"
import signOut from "../controllers/users/signOut.js"


const auth_router = Router()

auth_router.get('/',read)
auth_router.post('/signin',validator(userSignIn),signIn)
auth_router.post('/signout',signOut)

export default auth_router