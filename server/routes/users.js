import express from 'express';
import users from '../models/users';

const router = express.Router();

/*
const getAllUsers = () => new Promise ((response, reject) => {
    
    users.find({}, (err, users) => {
        if(err) {
            return reject(err);
        }

        response(users);
    });
});
*/

const getAllUsers = async() => users.find({}, (err, users) => err ? err : users);

router.get('/', (request, resolve) => {
    getAllUsers().then(users => resolve.json(users));
});

export { router };