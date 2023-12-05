import { type Request, type Response } from 'express'
import Project from '../schemas/project'

const getAllProject = async (req: Request, res: Response) => {
  try {
    const projects = await Project.find()
    res.json(
      projects
    )
  } catch (error) {
    res.status(401).json({
      msg: 'Projects not found'
    })
  }
}

export {
  getAllProject
}
