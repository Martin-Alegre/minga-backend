import { Router } from "express";
import read from "../controllers/mangas/read.js";
import createManga from "../controllers/mangas/create.js";

const manga_router = Router();

//manga_router.post()
manga_router.get("/", read);
manga_router.post("/create", createManga);
//manga_router.put()
//manga_router.delete()

export default manga_router;
