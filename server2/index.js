const express = require('express');
require ("./database/mongoose")
const cors = require("cors");

const bodyParser = require('body-parser');

const useRouter = require("./router/user");

const app= express();


const port = 4000;




app.use(cors());
app.use(bodyParser.json());
app.use(useRouter)



 app.listen(port,()=>{
    console.log('servr is listen up port ${port}'+ port);
 })

