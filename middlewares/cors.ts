import cors from 'cors'

const ACCEPTED_ORIGINS = ['http://localhost:3000', 'http://localhost:5173', 'http://localhost:1234', 'https://sekaidev.com', 'https://www.sekaidev.com', 'http://www.sekaidev.com', 'http://sekaidev.com']

export const corsMiddleware = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) => cors({
  origin: (origin, callback) => {
    if (!origin || ACCEPTED_ORIGINS.includes(origin)) { callback(null, true); return }

    callback(new Error('Not Allowed by CORS'))
  }
})
