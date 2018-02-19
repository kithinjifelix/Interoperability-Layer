import Boom from 'boom'
import Path from 'path'
import models from '../../models'
import { getSubscribedEntities, getMessageTypeObj, getSubscribedMessageTypes } from '../../logic/db.manipulation'

exports.register = (server, options, next) => {

    const ILServer = server.select('web-ui')

    ILServer.route({
        method: 'GET',
        path: '/{path*}',
        handler: {
            directory: {
                path: Path.join(__dirname, '..', '..', '..', 'build'),
                listing: false,
                index: ['index.html']
            }
        },
        config: {
            description: 'serves the react web app',
            tags: ['react', 'web app', 'client'],
            notes: 'serves the react web app',
            cors: {
                origin: ['*']
            }
        }
    })
  return next()
}

exports.register.attributes = {
    name: 'web.routes'
}
