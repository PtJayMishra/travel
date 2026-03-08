import asyncHandler from "../../utils/asyncHandler.js";
import service from "./auth.service.js";

const register = asyncHandler(async(req , res)=>{
    const user = await service.registerUser(req.body);
    res.status(201).json({
        success: true,data : user
    });
})
const login = asyncHandler(async(req , res) =>{
    const token = await service.loginUser(req.body);
    res.status(201).json({
        success: true,
        data : token
    })
})
export default{
    register ,
    login,
}