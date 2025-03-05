const register=require("../module/registration_module")
const login=require("../module/login_module.js")

exports.registereddata=(req,res)=>{
    register(req).then((data)=>{
        res.status(200).send(data)
        // console.log(data);
        
    })
    .catch((err)=>{
        res.status(400).send(err)
        console.log(err);
        
    })
}

exports.loginuserdata = (req, res) => {
    login(req)
        .then((data) => { 
            res.status(200).send(data); // ✅ 200 for successful login
        })
        .catch((err) => { 
            res.status(400).send(err); // ✅ 400 for login error
            console.log(err);
        });
};
// module.exports=registereddata