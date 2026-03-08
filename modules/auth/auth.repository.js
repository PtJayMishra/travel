import User from "../../models/user.js";
const createUser = async(data)=>{
return await User.create(data);
}
const findUserByEmail = async(email)=>{
    return await User.findOne({
        email
    })
}
export default {
   createUser,
   findUserByEmail
}