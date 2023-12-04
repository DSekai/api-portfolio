import { Router } from 'express'
import { getAllProject } from '../controllers/project'

const router = Router()

router.get('/', getAllProject)

export default router
