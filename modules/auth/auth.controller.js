import ApiError from "../../utils/ApiError.js";
import asyncHandler from "../../utils/asyncHandler.js";
import service from "./auth.service.js";
import jwt from "jsonwebtoken";


const register = asyncHandler(async(req , res)=>{
    const user = await service.registerUser(req.body);
    res.status(201).json({
        success: true,data : user
    });
})
const login = asyncHandler(async(req , res) =>{
    const result  = await service.loginUser(req.body);
    res.status(201).json({
        success: true,
        data : result
    })
})
const refreshToken = asyncHandler(async(req , res)=>{
    const {refreshToken} = req.body;
    if(!refreshToken){
        throw new ApiError(400 , "Refresh token is required");
    }
    const decode = await jwt.verify(refreshToken, process.env.JWT_SECRET);
    const accessToken = generateAccessToken(decode.id);
    res.status(200).json({
        success: true,
        data : accessToken
    })

})
export default{
    register ,
    login,
    refreshToken
 
}