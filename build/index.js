"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const http = require("http");
const hostname = process.env.HOST || '0.0.0.0';
const port = parseInt(process.env.PORT || '3000', 10);
const server = http.createServer(app_1.requestListener);
server.listen(port, hostname, () => {
    console.log(`Grhow server is listening on ${hostname}:${port}`);
});
