const router = require('express').Router();
const savedNotes = require('../db/save');

router.get('/notes', (req, res) => {
    savedNotes.getNotes().then((notes) => {
        return res.json(notes)
    })
})

router.post('/notes', (req, res) => {
    savedNotes.addNote(req.body)
    .then((note) => res.json(note))
})

router.delete('/notes/:id', (req, res) => {
    savedNotes.deleteNote(req.params.id)
      .then(() => res.json({ ok: true }))
  });

module.exports = router;