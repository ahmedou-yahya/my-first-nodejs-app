const { response } = require('express');
const express = require('express');
const { readFile } = require('fs');

const app = express();

app.get('/ahmedou', (request, response) =>{

    readFile('./home.html', 'utf8', (err, html)=>{
        if(err){
            response.status(500).send('sorry, out of order')
        }
        response.send(html)
    })
})

app.listen(3000, ()=> console.log("You're app is available on port 3000"))