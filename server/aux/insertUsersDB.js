import MongoClient from 'mongodb';

import { names }  from './names.js';
import Users from './../models/users';
import { handleResponse, handleError } from '../utils/handlers.js';

const createRandomPassword = () => {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
    const aCharacters = characters.split('');

    let password = [];

    for (let i=0; i<=10; i++) {
        const randomIndex = Math.floor(Math.random()*aCharacters.length);
        const randomCharacter = aCharacters[randomIndex];
        password.push(randomCharacter);
    }

    return password.join('');
}

const createUsers = () => {

    return names.map(name => ({
        name,
        email: name.toLowerCase().replace(/ +/g, "") + '@gmail.com',
        password: createRandomPassword(),
        role: 'USER_ROLE',
        state: true,
        google: false
        })
    );

}

export default function insertUsersDB() {
    
    return new Promise((resolve, reject) => {
        
        MongoClient.connect('mongodb://localhost:27017', (err, client) => {
        
            if(err) {

                reject(err);

            } else {

                const db = client.db('coffeeDB');
                const usersCollection = db.collection('users');

                const aUsers = createUsers();
                
                usersCollection.insertMany(aUsers)
                .then(response => resolve(handleResponse('50 users have been inserted into coffeeDB!')))
                .catch(err => reject(handleError(err)))

            }
        
        });
    })
}

