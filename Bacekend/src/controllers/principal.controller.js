import { Users } from "../models/user.models.js"


const createPrincipal= async()=>{
    try{
        const principal= await Users.findOne({email:"principal@classroom.com"})
        if(!principal)
        {
           const create= await Users.create({
            email:"principal@classroom.com",
            password:"Admin",
            role:'principal'
           })
           if(create)
            console.log("principal created successfully")
        }
        
    }catch(error){
        console.log("Error while creating the principal ",error);
        throw error
    }
}

export default createPrincipal;