import express from 'express';
import insertRandomUsersDB from '../aux/insertUsersDB';

const router = express.Router();

router.get('/', (request, resolve) => {

    insertRandomUsersDB()
    .then(response => resolve.status(200).json(response))
    .catch(err => resolve.status(400).json(err));

});

export { router };