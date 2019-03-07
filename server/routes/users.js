import express from 'express';
import { getAllUsers } from '../controllers/users';
import User from '../models/users';

const router = express.Router();

router.get('/', (request, resolve) => {

    getAllUsers()
    .then(users => resolve.status(200).json(users))
    .catch(err => resolve.status(400).json(err))

});

router.post('/', (request, resolve) => {
    
    const { name, email, password, role } = request.body;

    const user = new User({
        name,
        email,
        password,
        role
    });

    user.save((err, response) => {
        if(err) {
            return resolve.status(400).json({
                ok: false,
                err
            });
        }

        resolve.json({
            ok: true,
            user: response
        })
    })
})

export { router };