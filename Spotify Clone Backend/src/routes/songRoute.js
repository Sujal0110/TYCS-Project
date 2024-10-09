import { addSong, listenSong } from "../controllers/songController";
import express from "express";

const songRouter = express.Router();

songRouter.post("/add", addSong);
songRouter.get("/list", listenSong);

export default songRouter;
