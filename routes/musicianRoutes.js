import { Router } from "express";
import MusicianControllers from "../Controllers/MusiciansControllers.js";


const musiciansControllers = new MusicianControllers();
const musicianRoutes = Router();

musicianRoutes.get('/', musiciansControllers.getAllMusicians);
musicianRoutes.post('/', musiciansControllers.createMusician);

export default musicianRoutes;