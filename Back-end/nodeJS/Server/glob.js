const glob = require('glob');

glob('favicon.icon', (err, files) => {
    if (err) {
        console.log(err);
    }
    console.log(files);
});