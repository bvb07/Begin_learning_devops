// const app = require('express')()
// const path = require('path')
// const axios = require('axios');
import axios from "axios";
import express from "express";
const app = express();

// Express route handler with URL: '/products' and a handler function
app.get("/", (request, response) => {
  axios({
    method: "get",
    url: "http://w2:3000/",
  }).then((apiResponse) => {
    const APIweb = apiResponse.data.message;
    console.log("result : ", APIweb);
    response.status(200).json({ message: "hello :  ", apiResponse: APIweb });
  });
});

// app.get("/", async (req, res) => {

// 	try {
//     axios.get("http://localhost:3000")
//     .then(data => res.status(200).send(data))
//     .catch(err => res.send(err));

// 	} catch (err) {
// 		res.status(500).json({ message: err });
// 	}
// });

// axios.get('http://localhost:3000/')
// .then(res => {
//  console.log('result :', res.data.message);

// })
// .catch(err => {
//  console.log('Error: ', err.message);
//  res.status(400)
// });

//
// app.get("/",(req,res)=> {

//   res.status(200).json({
//     message : "results from Service web 2",
//     message2 : " hello sonny "
//   });

//   });
// res.sendFile(path.join(__dirname, '/index.html'));

app.listen(3001, () => {
  console.log("service is running on port 3001");
});
