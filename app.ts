import express from 'express'
import { corsMiddleware } from './middlewares/cors'
import { MongoDBConnection } from './dataBase/mongo'
import ExperienceRouter from './routes/experience'
import ProjectRouter from './routes/project'

MongoDBConnection()
  .then(() => {
    const app = express()
    app.use(express.json())
    app.use(corsMiddleware())

    app.disable('x-powered-by')

    const PORT = process.env.PORT ?? 1234

    app.use('/experiences', ExperienceRouter)
    app.use('/projects', ProjectRouter)

    app.listen(PORT, () => {
      console.log(`Server listening on port http://localhost:${PORT}`)
    })
  })
