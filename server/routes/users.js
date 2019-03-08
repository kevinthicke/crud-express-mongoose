import express from 'express';
import { getAllUsers, insertUser } from '../controllers/users';

const router = express.Router();

router.get('/', (request, resolve) => {

    getAllUsers()
    .then(response => resolve.status(200).json(response))
    .catch(err => resolve.status(400).json(err));

});

router.post('/', (request, resolve) => {

    const user = request.body;

    insertUser(user)
    .then(response => resolve.status(200).json(response))
    .catch(err => resolve.status(400).json(err));

});

router.put('/:id', (request, resolve) => {
    
    const { id } = request.params;
    const updatedUser = request.body;

    updatedUser(id, updatedUser)
    .then(response => resolve.status(200).json(response))
    .catch(err => resolve.status(400).json(err));

})

export { router };