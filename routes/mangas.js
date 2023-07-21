
import { Router } from "express"
import read from "../controllers/mangas/read.js"

import read_One from "../controllers/mangas/read_One.js"
import createManga from "../controllers/mangas/create.js"
import passport from "../middlerwares/passport.js"
import validator from "../middlerwares/validator.js"
import has_permission from "../middlerwares/has_permission.js"
import mangaCreate from "../schemas/auth/createManga.js"
import mangaExists from "../middlerwares/mangaExists.js"


const manga_router = Router();

//manga_router.post()


manga_router.get('/',passport.authenticate("jwt",{ session: false}),read)
manga_router.post('/create',passport.authenticate("jwt", { session:false }),createManga)
manga_router.get('/:id',passport.authenticate("jwt", { session:false}), read_One)
manga_router.post("/", validator(mangaCreate), passport.authenticate("jwt", {session:false}), has_permission, mangaExists, createManga)

//manga_router.put()
//manga_router.delete()

export default manga_router;
