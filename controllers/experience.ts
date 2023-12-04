import { type Request, type Response } from 'express'
import Experience from '../schemas/experience'

const getAllExperience = async (req: Request, res: Response) => {
  try {
    const experiences = await Experience.find()
    res.json({
      experiences
    })
  } catch (error) {
    res.status(401).json({
      msg: 'Experience not found'
    })
  }
}

export {
  getAllExperience
}
