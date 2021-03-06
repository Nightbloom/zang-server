const express = require('express')
const cors = require('cors');
const app = express()
const env = require("dotenv");
env.config({ path: "./config/.env" })
const PORT = process.env.PORT || 5000
const db = require('./config/db');
const payment = require("./routers/payment-routes")

db()
app.use(cors());
app.use(express.json({ extended: false }))

app.use("/api/payment/", payment)
app.set('port', PORT);

app.get("/", (req, res)=>{res.send(`Server started on ${PORT}`)})

app.listen(app.get('port'), () => console.log(`http://localhost:${PORT || 5000}`))
