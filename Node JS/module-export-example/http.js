const {send, read} = require('./internals')

// const request = require('./internals/request');
// const res = require('./response')

 function myRequest(url,data){
    send(url,data)

    return read('hi')
}


const reponseData= myRequest("www.google.com", "hi")
console.log(reponseData);
