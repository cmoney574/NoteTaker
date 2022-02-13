const util = require('util');
const fs = require('fs');

const uuidv1 = require('uuid/v1');

const fileRead = util.promisify(fs.readFile);
const fileWrite = util.promisify(fs.writeFile);

class Save {
    readjson() {
        return fileRead('db/db.json', 'utf8');
      }
    writejson(note){
        return fileWrite('db/db.json', JSON.stringify(note))
    }

    async getNotes() {
        const notes = await this.readjson();
        let savedNotes = [].concat(JSON.parse(notes));
        return savedNotes;
      }
    async addNote(note){
        const { title, text } = note;
        if (!title || !text) {
            throw new Error("Title or text is blank");
          }
        const newNote = { title, text, id: uuidv1() };
        const notes = await this.getNotes();
        const updatedNotes = [...notes, newNote];
        this.writejson(updatedNotes);
        return newNote;
    }
    async deleteNote(id) {
        const notes = await this.getNotes();
        const filteredNotes = notes.filter((note) => note.id !== id);
        return this.write(filteredNotes);
      }
}

module.exports = new Save();