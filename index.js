const chokidar = require('chokidar');
const fs = require('fs');
const path = require('path');
const config = require('./config');

chokidar.watch(config.path).on('all', (event, filename) => {
    try {
        var data = fs.readFileSync(filename, { encoding: 'utf8', flag: 'r' });
        dataArray = data.split('\r\n');
        //console.log(dataArray);

        var err = 0;
        for (var i = 1; i < dataArray.length; i++) {
            var tmpArray = (dataArray[i]).split(',');
            console.log(tmpArray[0], tmpArray[1]);

            var reg = /^\d+$/;
            if (!(reg.test(tmpArray[1]))) {
                err = 1;
            }
        }
        if (err == 1) {
            console.log(filename + " move to error");
        }
        else {
            console.log(filename + " move to archived and perform insert operation");
        }
    }
    catch (error) {
        console.log("error11" + error);
    }
});


