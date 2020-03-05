var fs = require('fs');

function read_param(oldfile, newfile) {
    if (!oldfile && !newfile) {
        console.log('av 2 and 3 missing');
        return;
    }
    if (!oldfile) {
        console.log('av 2 missing');
        return;
    }
    if (!newfile) {
        console.log('av 3 missing');
        return;
    }
    const content = fs.readFileSync(oldfile);
    fs.appendFile(newfile, '{\n', function (err) {
        if (!err)
            console.log('Saved!');
    });
    fs.appendFile(newfile, content, function (err) {
        if (!err)
            console.log('Saved!');
    });
    fs.appendFile(newfile, '\n}', function (err) {
        if (!err)
            console.log('Saved!');
    });
}

read_param(process.argv[2], process.argv[3]);
