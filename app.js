import express from 'express';
import bodyParser from 'body-parser';
const app = express();
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get('/', (req, res) => {
    res.send('Hello World');
    });
