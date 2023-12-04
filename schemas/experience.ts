import { Schema, model } from 'mongoose'

const ExperienceSchema = new Schema({
  date: {
    type: String,
    required: [true, 'The date is required']
  },
  rol: {
    type: String,
    required: [true, 'The rol is required']
  },
  description: {
    type: String,
    required: [true, 'The description is required']
  }
})

ExperienceSchema.methods.toJSON = function () {
  const { _v, _id, ...experiences } = this.toObject()

  experiences.id = _id

  return experiences
}

export default model('experiences', ExperienceSchema)
