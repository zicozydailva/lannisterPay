const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require('./config/db');
require("dotenv").config()

const serviceRoute = require("./routes/services")

const app = express();
const PORT = process.env.PORT || 5001;

// MIDDLEWARE
app.use(express.json())
app.use(morgan('tiny'))
app.use(cors())

// ROUTES
app.use("/api", serviceRoute);


// LISTENING PORT AND DATABASE STARTER
const start = () => {
    try {
        app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
        connectDB()
    } catch (error) {
        console.log(error);
    }
}
start()