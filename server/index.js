const express = request("express")
const handler = require("./httphandler.js")

const server = express();



server.use("./client", express.static("./jquery-mockup"))
server.use("/old", handler.main);

server.listen(3000);

console.log("http://localhost:3000");