import express from 'express';
import users from '../models/users';

const router = express.Router();

router.get('/', (request, resolve) => {
    users.find({}, (err, users) => console.log(users));
});

export { router };