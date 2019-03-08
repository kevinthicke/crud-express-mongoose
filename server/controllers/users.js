import User from "../models/users";
import { handleError, handleResponse } from "../utils/handlers";


const getAllUsers = () => new Promise((resolve, reject) => {
    
    User.find({}, (err, users) => {
        return (
            err 
            ? reject(handleError(err)) 
            : resolve(handleResponse(users))
        )
    })

})

const insertUser = newUser => new Promise((resolve, reject) => {

    const { name, email, password, role } = newUser;

    const user = new User({
        name,
        email,
        password,
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

export {
    getAllUsers,
    insertUser,
    updateUser
}