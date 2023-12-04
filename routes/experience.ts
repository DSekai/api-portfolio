import { Router } from 'express'
import { getAllExperience } from '../controllers/experience'

const router = Router()

router.get('/', getAllExperience)

export default router
