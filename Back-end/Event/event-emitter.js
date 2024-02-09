const EventEmitter = require('events');
const emitter = new EventEmitter();
const fs = require('fs');

emitter.on('myEvent1', () => {
    fan('myEvent1');
});
emitter.on('myEvent2', () => {
    fan('myEvent2');
});
emitter.on('myEvent3', () => {
    fan('myEvent3');
});
emitter.on('myEvent4', () => {
    fan('myEvent4');  
});

function fan(data) {
    const currentTime = new Date();
    const eventData = {
        Date: currentTime,
        Event: data
    };
    fs.appendFile('./eventLog.txt', `Event emitted at: ${currentTime} - Event: ${data}\n`, (err) => {
        if (err) {
            console.log('Error writing to file:', err);
        }
        else
        {
            console.log('Event time and data saved');
        }
    });
}

module.exports=emitter;