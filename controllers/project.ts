import { type Request, type Response } from 'express'
import Project from '../schemas/project'

const getAllProject = async (req: Request, res: Response) => {
  try {
    const project = await Project.find()
    res.json({
      project
    })
  } catch (error) {
    res.status(401).json({
      msg: 'Projects not found'
    })
  }
}

export {
  getAllProject
}
