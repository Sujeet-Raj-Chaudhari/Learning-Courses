const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const routesUrls = require("./routes/routes");

dotenv.config();

mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("DATBASE CONNECTED SUCCESSFULLY"))

app.use(express.json())
app.use(cors())
app.use('/app', routesUrls)
app.listen(5000, () => console.log("Sever is up and running"))