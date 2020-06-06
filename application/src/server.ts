import express from 'express'
import { createServer } from 'http'
import { initModules, initServer } from './tools/server.tool'
const listEndpoints = require('express-list-endpoints')

import dotenv from 'dotenv'
import { keyPhraseExtraction } from './tools/text.tool'
dotenv.config()

export default class ServerInterop {
  static getInstance() {
    if (!ServerInterop.instance) {
      ServerInterop.instance = new ServerInterop()
    }
    return ServerInterop.instance
  }

  server: any
  app: any

  constructor() {
    this.initApp()
    this.hostApp()
  }

  private initApp = () => {
    this.app = express()
    const router = express.Router()
    this.app.use('/', router)

    router.get('/api/all', (req: any, res: any) =>
      res.send(listEndpoints(this.app))
    )

    router.get('/api/getKeywords', async (req: any, res: any) => {
      res.send(await keyPhraseExtraction(req.query.text))
    })

    initModules(this.app)
  }

  private hostApp = () => {
    this.server = createServer(this.app)
    initServer(this.server)
  }
  private static instance: ServerInterop
}

ServerInterop.getInstance()
