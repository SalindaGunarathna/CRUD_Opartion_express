const mongoose = require('mongoose');



const Url ="mongodb+srv://salinda:salinda123@cluster0.yosckxd.mongodb.net/test01?retryWrites=true&w=majority";

mongoose.connect(Url,{
    useNewUrlParser :  true,
    useUnifiedTopology: true,

});

const connection = mongoose.connection
mongoose.set('strictQuery',true);

connection.once("open",()=>{
    console.log("dat base connected succesfull")
})
