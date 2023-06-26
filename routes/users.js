import { Router } from "express"
import read from "../controllers/users/read.js"

const auth_router = Router()

auth_router.get('/',read)

export default auth_router