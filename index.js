var fs = require('fs');
var colors = require('colors');

fs.readdir('folder1', (err, files) => {
    if (err) throw err;
    console.log('Wykaz plików w folderze: ' + files);
    fs.writeFile('files.txt', files, (err) => {
        if (err) throw err;
        console.log('Wykaz zapisany do pliku files.txt');
    });
});