const express = require('express')
const cors = require('cors');
const app = express()
const env = require("dotenv");
env.config({ path: "./config/.env" })
const PORT = process.env.PORT
const db = require('./config/db');
const payment = require("./routers/payment-routes")

db()
app.use(cors());
app.use(express.json({ extended: false }))

app.use("/api/payment/", payment)

app.listen(PORT || 5000, () => console.log(`http://localhost:${PORT || 5000}`))