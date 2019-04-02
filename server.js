
const express = require('express');
const path = require('path');
const app= express();

const posts=require('./server/routes/posts');

app.use(express.static(path.join(__dirname,'dist')));

//catch all other routes req and return it to index
app.get('*',(req,res) =>{
    res.sendFile(path.join(__dirname,'src/index.html'));
});
app.listen(3000 ,(req,res)=>{
    console.log('RUNNING');
});