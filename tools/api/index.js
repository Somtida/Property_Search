import { Router } from 'express'
const router = Router();

import properties from './properties'

router.use('/properties', properties);

export default router
