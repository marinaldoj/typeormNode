import "reflect-metadata"
import express from 'express'
import cors from 'cors'
import { AppDataSource } from './database/dbConnection'
import userRoutes from './routes/user.routes'

async function main(){
  await AppDataSource.initialize()
  const app = express()
  app.use(cors())
  app.use(express.json())

  app.use(userRoutes)

  app.listen(3333, () => {
    console.log("Server is running.")
  })
}

main()
