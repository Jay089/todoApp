const express = require("express")
const  mongoose = require('mongoose')

const app = express();

// connection to mongodb
mongoose.connect("mongodb://127.0.0.1:27017/todo_express",{
    useNewUrlParser : true,
    useUnifiedTopology: true,
});

//middlewares
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))
app.set("view engine" , "ejs")

//routes
app.use(require("./routes/index"))
app.use(require("./routes/todo"))
//server configuration
app.listen(3000, () => console.log("Server started Listening on port: 3000"))