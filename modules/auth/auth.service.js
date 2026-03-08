import bycrypt from "bcryptjs";
import jwt from "jsonwebtoken";
 
import repo from "./auth.repository.js";
import ApiError from "../../utils/ApiError.js";

const registerUser = async({name , email , password}) =>{
    const existingUser = await repo.findUserByEmail(email);
    if(existingUser){
        throw new ApiError(400 , "User already exists");
    }
    const hassedPassword = await bycrypt.hash(password , 10);
    const user = await repo.createUser({
        name , email , password :hassedPassword
    })
    return user;

}
const loginUser = async ({email, password}) =>{
    const user = await repo.findUserByEmail(email);
    if(!user){
        throw new ApiError(400, "User Not found");
    }
    const isMatch = await bycrypt.compare(password , user.password);
    if(!isMatch){
        throw new ApiError(401 , "Invalid credentials");
    }
    const token = jwt.sign({id : user._id} , process.env.JWT_SECRET,{expiresIn : "7d"})
    return { user , token};
}
export default{
    registerUser,
    loginUser
}
