import User from "../../models/user";

const findAllUsers = async(query)=>{
    const {page = 1 , limit = 10} = query;
    const user = await User.find().skip((page -1) * limit).limit(limit);
    return user;

}
const findUserById = async (id) => {
    return User.findById(id);
}
const updateUser = async(it , data)=>{
    return User.findByIdAndUpdate(it , data , {new: true});
}
const deleteUser = async(id) => {
    return User.findByIdAndDelete(id);
}
export default{
    findAllUsers,
    findUserById,
    updateUser,
    deleteUser
}   ;