const { inherits } = require('util'); 
const { EventEmitter } = require('events'); 

function Character (name){
    this.name = name; 
}

inherits(Character, EventEmitter); // isso tá outdated?

const chapolin = new Character('Laura'); 
chapolin.on('help', () => console.log(`Eu o ${chapolin.name} colorado!`)); 

chapolin.emit('help');

