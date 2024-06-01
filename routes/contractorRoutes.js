import { Router } from "express";

const contractorRoutes = Router();

contractorRoutes.get('/', (req, res) => {
  res.send('get all from contractorRoutes')
});

export default contractorRoutes;