const mongoose = require('mongoose');

function connectDB(){
    mongoose.connect(process.env.MONGODB_URL).then(()=>{
        console.log('Conneted to DataBase');
        
    }).catch((err)=>{
        console.log('Failed to Connect to DataBase',err);
        
    })
}
module.exports = connectDB