require('dotenv').config();
const express = require('express');
const app = express();
const gamesRouter = require('./routes/games');
const genderRouter = require('./routes/gender');

// connect to MongoDB
const connectDB = require('./db/connect');

// middlewares
app.use(express.json())

// routes
app.use('/api/v1/', gamesRouter);
app.use('/api/v1/', genderRouter);


app.get('/', (req, res) => {
    res.send('<h1>Games api</h1>');
})


const port = process.env.PORT || 3000; 

const start = async () => {
    try {
        // connectDB
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening port ${port}`))
    } catch (error) {
        console.log(error);
    }
}

start();