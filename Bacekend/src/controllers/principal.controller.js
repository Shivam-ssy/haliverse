import { Users } from "../models/user.models.js"


const createPrincipal= async()=>{
    try{
        const principal= await Users.findOne({email:"principal@example.com"})
        if(!principal)
        {
           const create= await Users.create({
            email:"principal@example.com",
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