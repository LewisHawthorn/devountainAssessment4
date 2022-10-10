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

const { clearMessages } = require('./controller')

app.delete("/api/clear", clearMessages);

const { countMessages } = require('./controller')

app.get("/api/count", countMessages);

app.listen(4000, () => console.log("Server running on 4000"));
