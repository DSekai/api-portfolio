import mongoose from 'mongoose'

const MONGODB = process.env.MONGODB ?? ''

export const MongoDBConnection = async () => {
  await mongoose.connect(MONGODB)
    .then(() => { console.log('DataBase Online') })
    .catch((error) => { throw new Error(`Failed to connect to MongoDB: ${error.message}`) })
}
