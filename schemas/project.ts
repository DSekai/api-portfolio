import { Schema, model } from 'mongoose'

const ProjectSchema = new Schema({
  name: {
    type: String,
    required: [true, 'The name is required']
  },
  img: {
    type: String
  },
  url: {
    type: String,
    required: [true, 'The url is required']
  },
  description: {
    type: String,
    required: [true, 'The description is required']
  },
  tecnology: {
    type: Object
  },
  git: {
    type: String,
    required: [true, 'The git is required']
  }
})

ProjectSchema.methods.toJSON = function () {
  const { _v, _id, ...projects } = this.toObject()

  projects.id = _id

  return projects
}

export default model('projects', ProjectSchema)
