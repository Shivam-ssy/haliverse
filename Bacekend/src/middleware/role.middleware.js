import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const verifyRole=(requiredRole)=>{
    return asyncHandler(async(req,_,next)=>{
        try {
            
            const userRole=req.user.role
            console.log(userRole);
            
            if(!requiredRole.includes(userRole))
               throw new ApiError(403,'Access denied! You do not have required permission')
    
            next()
        } catch (error) {
            throw new ApiError(500, error.message || "Something went wrong at role check")
        }
    })
}
export {verifyRole}
