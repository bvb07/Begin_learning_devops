const app = require('express')()
const cors = require("cors")


app.use(cors())
app.get("/",(req,res)=> {
    res.status(200).json({
        message : "results from Service web 1"
    })
})

app.listen(3000,() => {
    console.log("service is running on port 3000")
})