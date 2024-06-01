import { Router } from 'express';
import musicianRoutes from './musicianRoutes.js';
import contractorRoutes from './contractorRoutes.js';

const router = Router();

router.use('/contractors', contractorRoutes);
router.use('/musicians', musicianRoutes);


export default router;