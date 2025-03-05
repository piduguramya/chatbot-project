const mongoose = require('mongoose')
require('dotenv').config()
function dbConnect(){
    
    mongoose.connect(`mongodb+srv://piduguramya14e:8Hj4JRNgCKLAHHWP@cluster1.hgm6u.mongodb.net/database1`)
   .then(()=>{
       console.log('mongoose connected');
       
   })
   .catch((err)=>{
       console.log(err);   
   })

}

module.exports={dbConnect}  






















