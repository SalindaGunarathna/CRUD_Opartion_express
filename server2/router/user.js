const express = require("express")

const router = express.Router();
const User = require("../models/user") 


router.post("/users", async (req,res)=>{

    // body use get data from front end 
    // 201 is special number to take requist 
    // 400 elsoerror status 

    const user =new User(req.body);
    try {
        await user.save()
        res.status(201).send(user)
    } catch (error){
        res.status(400).send(error)
    }
})

router.get("/users", async(req,res)=>{
    

    try{
        // {} thi mean requist all users from dat base  
        // an also we can specipy the user name or id 
        // rather than use fine we can ise find id funton use 
        // same as there are more funtion  to find data 

        const users =await User.find({})
        res.status(200).send(users)

    } catch(error){
        res.status(400).send(error)
    }

});




router.get("/users/:id", async(req,res)=>{


    const _id = req.params.id

    try {
        

        const user = await User.findById(_id)
        // if user is false !user 
         if (!user){
             return res.status(404).send()


             }
            res.status(200).send(user);
    } catch(error){
        res.status(400).send(error)

    }

});



router.patch("/users/:id", async (req,res)=>{

    try{
        
        const updateUser =await User.findByIdAndUpdate(req.params.id,req.body,{
            new :true
        });

        if(!updateUser)
        {
            return res.status(404).send();

        }
        res.status(200).send(updateUser);


    } catch (error) {
        res.status(400).send(error);  

    }
}); 


router.delete("/users/:id", async (req,res) =>{

    try {
        const deleteUser = await User.findByIdAndDelete(req.params.id,req.body)
        if (!deleteUser)
        {
            return res.status(404).send();

        }
        return res.status(200).send(deleteUser);

    } catch (error) {
        res.status(400).send(error);
        
    }

});


module.exports = router;