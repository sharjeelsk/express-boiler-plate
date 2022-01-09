class User{
    async getUser (req,res){
        res.send("home routre user")
    }
}

const userController = new User();
module.exports=userController;