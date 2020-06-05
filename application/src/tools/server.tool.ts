import express from 'express'
import * as sapper from '@sapper/server'
import compression from 'compression'
import ServerTool from 'node-crud-kit/lib/tools/server.tool'

export const initServer = (server: any) => {
  ServerTool.handleServerErrors(server)

  server.listen('3000')
}

export const initModules = (app: any) => {
  app.set('port', '3000')
  app.use(express.static('public'))
  app.use(compression({ threshold: 0 }))
  app.use(sapper.middleware())

  ServerTool.handleAppErrors(app)
}
