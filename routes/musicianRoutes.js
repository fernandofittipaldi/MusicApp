import { Router } from "express";
import MusicianControllers from "../Controllers/MusiciansControllers.js";
import { validateLogin } from "../middlewares/validateLogin.js";


const musiciansControllers = new MusicianControllers();
const musicianRoutes = Router();

musicianRoutes.post('/', musiciansControllers.createMusician);
musicianRoutes.post('/login', musiciansControllers.loginMusician);

musicianRoutes.get('/me', validateLogin, musiciansControllers.me);
musicianRoutes.use(validateLogin);
musicianRoutes.get('/', musiciansControllers.getAllMusicians);
musicianRoutes.get('/:id', musiciansControllers.getMusicianById);
musicianRoutes.put('/:id', musiciansControllers.updateMusician);
musicianRoutes.delete('/:id', musiciansControllers.deleteMusician);

export default musicianRoutes;