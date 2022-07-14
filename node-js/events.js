const {EventEmitter} = require('events'); 

const ev = new EventEmitter(); 

// ativar o evento 
ev.on('saySomething', (message) => {
    console.log('Eu ouvi você', message)
})

ev.emit('saySomething', "Lau");

// se utilizar ev.once () ele escuta uma ÚNICA vez. 