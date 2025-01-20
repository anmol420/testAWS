import dotenv from 'dotenv';
import express from 'express';

dotenv.config({
    path: '.env'
});

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/about', (req, res) => {
    res.send('About Us');
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port: ${process.env.PORT}`);
});