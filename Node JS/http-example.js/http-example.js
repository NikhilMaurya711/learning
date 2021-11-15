const {get} = require('https');

get('https://www.google.com',(res) =>{
    console.log("res = ", res);

    res.on('data',(chunk)=>{
        console.log("data = ",chunk);
    })
})
