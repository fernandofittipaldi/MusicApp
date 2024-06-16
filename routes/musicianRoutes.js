import { Router } from "express";
import MusicianControllers from "../Controllers/MusiciansControllers.js";


const musiciansControllers = new MusicianControllers();
const musicianRoutes = Router();

musicianRoutes.get('/', musiciansControllers.getAllMusicians);
musicianRoutes.get('/:id', musiciansControllers.getMusicianById);
musicianRoutes.post('/', musiciansControllers.createMusician);
musicianRoutes.put('/:id', musiciansControllers.updateMusician);
musicianRoutes.delete('/:id', musiciansControllers.deleteMusician);

export default musicianRoutes;