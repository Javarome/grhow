import {Express, RequestHandler} from 'express'

const express = require('express')

export const currentUserRouter: RequestHandler = (req: any, res: any) => {
  res.status(200).json({
    name: 'Current user'
  })
}
const superUserRouter: RequestHandler = (req: any, res: any) => {
  res.status(200).json({
    name: 'Super user'
  })
}
export const createServer = () => {
  const app: Express = express()

  app.use('/api/currentUser', currentUserRouter)
  app.use('/api/superUser', superUserRouter)
  app.use('/api', (req: any, res: any) => res
    .setHeader('Access-Control-Allow-Origin', 'https://grhow.com')
    .setHeader('Content-Type', 'application/json')
    .status(200)
    .send({
      message: 'Grhow'
    })
  )
  return app
}
