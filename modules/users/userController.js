import asyncHandler from "../../utils/asyncHandler.js";
const getProfile = asyncHandler(async(req , res)=>{
    res.json({
        success : true,
        user: req.user
    })
})
export default{
    getProfile
}