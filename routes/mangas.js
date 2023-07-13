
import { Router } from "express"
import read from "../controllers/mangas/read.js"
import createManga from "../controllers/mangas/create.js"
import read_One from "../controllers/mangas/read_One.js"
import passport from "../middlerwares/passport.js"
import readOne from "../controllers/mangas/readOne.js"
import verifyAuthor from "../middlerwares/isPropertyOf.js"


const manga_router = Router();

//manga_router.post()


manga_router.get('/',read)
manga_router.post('/create',passport.authenticate("jwt", { session:false }),createManga)
manga_router.get('/:id',passport.authenticate("jwt", { session:false}), read_One)

//manga_router.put()
//manga_router.delete()

export default manga_router;
