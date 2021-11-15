function encrpt(data){
    return "Encrypted "+data
}

 function send(url, data){
   const encrpted = encrpt(data)
    console.log(`${url} has ${encrpted}`);
}

module.exports ={
    send
}