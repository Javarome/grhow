import {requestListener} from './app'
import * as http from 'http'

const hostname: string = process.env.HOST || '0.0.0.0'
const port = parseInt(process.env.PORT || '3000', 10)

const server = http.createServer(requestListener)
server.listen(port, hostname, (): void => {
  console.log(`Grhow server is listening on ${hostname}:${port}`)
})
