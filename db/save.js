const util = require('util');
const fs = require('fs');

const { v4: uuidv4 } = require('uuid');
uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

const fileRead = util.promisify(fs.readFile);
const fileWrite = util.promisify(fs.writeFile);

class Save {
    readjson() {
        return fileRead('db/db.json', 'utf8');
      }
    writejson(note){
        return fileWrite('db/db.json', JSON.stringify(note))
    }

    getNotes() {
        return this.readjson().then((notes) => {
          let savedNotes = [].concat(JSON.parse(notes))
    
          return savedNotes;
        });
      }
    addNote(){
        const { title, text } = note;
        if (!title || !text) {
            throw new Error("Title or text is blank");
          }
        const newNote = { title, text, id: uuidv4() };
        return this.getNotes()
        .then((notes) => [...notes, newNote])
        .then((updatedNotes) => this.write(updatedNotes))
        .then(() => newNote);
    }
}

module.exports = new Save();