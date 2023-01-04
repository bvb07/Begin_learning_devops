const http = require('http')
const fs = require('fs')
const express = require('express')
const app = express();

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' })
  fs.createReadStream('index.html').pipe(res)
})

server.listen(process.env.PORT || 3002)

// app.get("/",(res,req)=>{
//     res.status(200).json({
//     message : "results from Service "
// })

// })
// app.listen(3002,()=>{
//   console.log("server is running 3002");
// })