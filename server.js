const express = require("express")
const app = express()
app.use(express.json())

const{router} = require("./Routes/student.routes")
app.use("/",router)



const {connection} = require("./config/db")

app.listen(8000,async()=>{
    try{
        await connection;
        console.log("db connected successfulyy")
    }catch(error){
        console.log(error)
    }
})

