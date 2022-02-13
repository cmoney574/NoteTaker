const util = require('util');
const fs = require('fs');

const { v4: uuidv4 } = require('uuid');
uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

class Save {
    
}

module.exports = new Save();