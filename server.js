const express = require("express")
const app = express()
app.use(express.json())

const{router} = require("./Routes/student.routes")
app.use("/",router)

const PORT = process.env.PORT || 3000;

const {connection} = require("./config/db")

app.listen(PORT,"0.0.0.0",async()=>{
    try{
        await connection;
        console.log("db connected successfulyy")
    }catch(error){
        console.log(error)
    }
})

