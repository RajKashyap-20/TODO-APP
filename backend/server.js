const app = require("./src/app")

const port= 800

app.listen(port, ()=>{
    console.log(`server is running on :${port}`)
})