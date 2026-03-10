import jwt from "jsonwebtoken";
export const generateAccessToken = (userId) =>{
    console.log(process.env.JWT_ACCESS_SECRET)

    return jwt.sign({id : userId} , process.env.JWT_ACCESS_SECRET , {expiresIn : process.env.ACCESS_TOKEN_EXPIRE})
console.log(token)}
export const generateRefreshToken = (userId)=>{
    return jwt.sign({id : userId} , process.env.JWT_REFRESH_SECRET , {expiresIn :process.env.REFRESH_TOKEN_EXPIRE})
}