require('dotenv').config();
const express = require('express');
const app = express();
const gamesRouter = require('./routes/games');

// connect to MongoDB
const connectDB = require('./db/connect');

// middlewares
app.use(express.json())

// routes
app.use('/api/v1/', gamesRouter);


app.get('/', (req, res) => {
    res.send('<h1>Games api</h1>');
})

app.get('/params', (req, res) => {
    console.log(req.query);
    res.send('hola')
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