const express = require('express');
const app = express();
const port = 5000
app.get('/',(req,res)=>{
    res.send(`<h1>Hello from jenkins</h1> `)
})


app.listen(5000 , ()=>{
    console.log(`Server is listening at port ${port}`);
})
