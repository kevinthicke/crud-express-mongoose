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

export {
    getAllUsers
}