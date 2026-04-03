const app = require("./src/app")

const port= 5000


const connectDB = require("./src/config/db")
connectDB();
app.listen(port, ()=>{
    console.log(`server is running on :${port}`)
})