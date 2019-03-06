import express from 'express';
import mongoose from 'mongoose';
import colors from 'colors/safe';
import logSymbols from 'log-symbols';

import { router as usersRouter } from './routes/users';

const PORT = 3701;
const MONGO_DB_URL = 'mongodb://localhost:27017/coffeeDB';

const app = express();

app.use('/users', usersRouter);

mongoose.connect(MONGO_DB_URL, (err, response) => {

    if(err) {
        throw new Error(colors.red('Connection error with DB'));
    }

    const msg = colors.bold.green(' DB connection established successfully');
    console.log(logSymbols.success, msg);

});

app.listen(PORT, () => {
    const mgs = colors.bold.cyan(` Server running on localhost:${PORT}`);
    console.log(logSymbols.success, mgs);
})
