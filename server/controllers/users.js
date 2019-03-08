import bcrypt from 'bcrypt';

import User from "../models/users";
import { handleError, handleResponse } from "../utils/handlers";


const getAllUsers = (from = 0, to = 15) => new Promise((resolve, reject) => {

    User.find({ state: true }, (err, users) => {
        
        if(err) return reject(handleError(err))
        
        User.count({}, (err, count) => {

            return (
                err 
                ? reject(handleError(err)) 
                : resolve(handleResponse({ users, count }))
            )

        })

    })
    .skip(Number(from))
    .limit(Number(to));

})

const insertUser = newUser => new Promise((resolve, reject) => {

    const { name, email, password, role } = newUser;

    const user = new User({
        name,
        email,
        password: bcrypt.hashSync(password, 10),
        role
    });

    user.save((err, user) => {
        return (
            err 
            ? reject(handleError(err)) 
            : resolve(handleResponse(user))
        )
    })

})
const updateUser = (id, updatedUser) => new Promise((resolve, reject) => {
    
    User.findByIdAndUpdate(id, updatedUser, { new: true }, (err, user) => {
        return (
            err 
            ? reject(handleError(err)) 
            : resolve(handleResponse(user))
        )
    })

})

const deleteUser = id => new Promise((resolve, reject) => {
    
    User.findByIdAndUpdate(id, { state: false }, { new: true }, (err, user) => {
        return (
            err 
            ? reject(handleError(err)) 
            : resolve(handleResponse(user))
        )
    })

})



export {
    getAllUsers,
    insertUser,
    updateUser,
    deleteUser
}