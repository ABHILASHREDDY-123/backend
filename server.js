const express = require("express");
const appRouter = require("./routers/appRouter");
const app = express();
const PORT = 8000;

app.use("/",appRouter)

app.listen(8000,()=>{
  console.log("Server is running");
})

