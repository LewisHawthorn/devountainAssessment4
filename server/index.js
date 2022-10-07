const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')

app.get("/api/compliment", getCompliment);

const { getFortune } = require('./controller')

app.get("/api/compliment", getFortune);

const { postMessage } = require('./controller')

app.post("/api/post", postMessage );

postMessage = (event) => {
    // , req, res) {
    console.log("test2")
    event.preventDefault()
    // const newMessage = document.createElement("p")
    // const node = document.createTextNode(req.body.data)
    // document.getElementById("newMessage").appendChild(node)
    // document.getElementById("posts").appendChild(newMessage)
    // res.status(200).send
    }   
form.addEventListener('submit', postMessage)

const { clearMessages } = require('./controller')
app.delete("/api/messages", clearMessages);

app.listen(4000, () => console.log("Server running on 4000"));
