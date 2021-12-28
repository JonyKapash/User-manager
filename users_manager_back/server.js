const express = require("express");
const app = express();


app.get('/', (req, res) => {
    console.log("HomePage")
    res.send("Home Page")
})

app.use('/users', require("./routes/users"))



const port = 4000; //todo: change to env file
app.listen(port);