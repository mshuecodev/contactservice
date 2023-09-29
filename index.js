const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const passport = require("passport")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const crypto = require("crypto")

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

let dbURI = "mongodb://127.0.0.1/contactdb"

// Connect to MongoDB database
mongoose
	.connect(dbURI, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(() => console.log("Connected to MongoDB"))
	.catch((err) => console.error("db error connect", err))

const groupRts = require("./routes/groupRts")
const contactRts = require("./routes/contactRts")

// others endpoint
app.use("/groups", groupRts)
app.use("/contact", contactRts)

app.get("/", (req, res) => {
	res.send("server running ok!")
})

const port = process.env.PORT || 100
app.listen(port, () => console.log(`Server running on port ${port}`))
