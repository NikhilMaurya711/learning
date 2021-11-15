const EventEmitter = require('events');

const celebrity = new EventEmitter();
 
celebrity.on('rece win',()=>{
    console.log("Congrats!!!");
})

celebrity.on('race win',()=>{
    console.log("Better luck next time");
})

celebrity.on('race',(result)=>{
    console.log('race =', result);
})
process.on('exit',(code)=>{
    console.log("exit =",code);
})
celebrity.emit('race','win')
celebrity.emit('race','loss')
