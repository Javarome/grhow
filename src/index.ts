import {ClientRequest, ServerResponse} from "http"

const http = require("http")
const host = "0.0.0.0"
const port = 8080
const requestListener = (req: ClientRequest, res: ServerResponse) => {
  res.setHeader("Content-Type", "application/json");
  res.writeHead(200)
  const message = {
    message: "grhow"
  }
  res.end(JSON.stringify(message))
}
const server = http.createServer(requestListener)
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`)
})
