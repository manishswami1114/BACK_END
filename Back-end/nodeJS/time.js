const emitter = require('./event-emitter');
const fs = require('fs');

emitter.on('customEvent', (time) => {
  fs.appendFile('./eventLog.txt', `Event emitted at: ${time}\n`, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log('Event time saved to eventLog.txt');
    }
  });
});
