const fs = require('fs');
const path = require('path');

function listDirectoriesAndFiles(directoryPath) {
  fs.readdir(directoryPath, (err, items) => {
    if (err) {
      console.error('Error reading directory:', err);
      return;
    }

    console.log('Directories:');
    items.forEach(item => {
      const itemPath = path.join(directoryPath, item);
      fs.stat(itemPath, (err, stats) => {
        if (err) {
          console.error('Error getting stats for', itemPath, err);
          return;
        }

        if (stats.isDirectory()) {
          console.log('  (D)', item);
        } else {
          console.log('  (F)', item);
        }
      });
    });
  });
}

const directoryPath = '.';
listDirectoriesAndFiles(directoryPath);
